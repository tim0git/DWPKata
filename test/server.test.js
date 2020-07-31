const app = require('../app');
const request = require('supertest');

describe('APP ROUTE TESTS DWPKata API', () => {
  // Test /api returns a pre formatted JSON Object.
  describe('Test the /api route returns the /api instructions', () => {
    test('When any request is sent to /api it returns a JSON object', () => {
      const invalidMethods = ['patch', 'get', 'put', 'delete', 'post'];
      const requests = invalidMethods.map(method => {
        return request(app)
          [method]('/api')
          .expect(404)
          .then(({ body }) => {
            expect(body).toHaveProperty('availableRoutes');
          });
      });
      return Promise.all(requests);
    });
  });

  // Get all users LISTED as living in london
  describe('GET All users listed as living in London', () => {
    test('should return users living in London', () => {
      return request(app)
        .get('/api/city/London/users')
        .expect(200)
        .then(({ body }) => {
          expect(body).toHaveProperty('users');
        });
    });

    // Test users return contain the correct properties
    test('When a user is returned it should contain the following key value pairs', () => {
      return request(app)
        .get('/api/city/London/users')
        .expect(200)
        .then(({ body: { users } }) => {
          users.forEach(user => {
            expect(user).toHaveProperty('id');
            expect(user).toHaveProperty('first_name');
            expect(user).toHaveProperty('last_name');
            expect(user).toHaveProperty('email');
            expect(user).toHaveProperty('ip_address');
            expect(user).toHaveProperty('latitude');
            expect(user).toHaveProperty('longitude');
          });
        });
    });

    // Test that users are returned irrespective of the case of the input location
    test('When passed a location in lower case returns users listed as living in london', () => {
      const invalidLocations = ['london', 'London', 'LONDON', 'LoNdOn'];
      const requests = invalidLocations.map(location => {
        return request(app)
          .get(`/api/city/${location}/users`)
          .expect(200)
          .then(({ body }) => {
            expect(body).toHaveProperty('users');
            expect(body.users.length).toBe(6);
          });
      });
      return Promise.all(requests);
    });
  });

  // Get all users listed as living within 50 miles of london
  describe('GET all users by location and distance', () => {
    test('When passed a location and distance returns users living withing the distance given', () => {
      return request(app)
        .get(`/api/geolocation/London/users?distance=50`)
        .expect(200)
        .then(({ body }) => {
          expect(body).toHaveProperty('users');
          expect(body.users.length).toBe(3);
        });
    });

    // Test users return contain the correct properties
    test('When a user is returned it should contain the following key value pairs', () => {
      return request(app)
        .get('/api/geolocation/London/users?distance=50')
        .expect(200)
        .then(({ body: { users } }) => {
          users.forEach(user => {
            expect(user).toHaveProperty('id');
            expect(user).toHaveProperty('first_name');
            expect(user).toHaveProperty('last_name');
            expect(user).toHaveProperty('email');
            expect(user).toHaveProperty('ip_address');
            expect(user).toHaveProperty('latitude');
            expect(user).toHaveProperty('longitude');
          });
        });
    });
  });

  describe('TEST 405 Invalid Methods for all routes', () => {
    test('When method is not valid it returns a message that has the location of the server instructions', () => {
      const invalidMethods = ['patch', 'put', 'delete', 'post'];
      const requests = invalidMethods.map(method => {
        return request(app)
          [method]('/api/city/London/users')
          .expect(405)
          .then(({ body }) => {
            expect(body).toHaveProperty(
              'message',
              'method not allowed please see /api for available end points'
            );
          });
      });
      return Promise.all(requests);
    });
    test('When method is not valid it returns a message that has the location of the server instructions', () => {
      const invalidMethods = ['patch', 'put', 'delete', 'post'];
      const requests = invalidMethods.map(method => {
        return request(app)
          [method]('/api/geolocation/London/users?distance=50')
          .expect(405)
          .then(({ body }) => {
            expect(body).toHaveProperty(
              'message',
              'method not allowed please see /api for available end points'
            );
          });
      });
      return Promise.all(requests);
    });
  });
});
