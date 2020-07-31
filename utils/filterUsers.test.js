const { filterUsers } = require('./filterUsers');

// Maunal math for lat and long extremes
// Long: E: 1.044016, W: -1.280200
// Lat: N: 52.233200, S: 50.78653

const users = [
  {
    id: 1,
    first_name: 'test max long',
    last_name: 'E',
    email: 'test@gmail.com',
    ip_address: '192.168.0.1',
    latitude: 51.509865,
    longitude: 1.047
  },
  {
    id: 2,
    first_name: 'test max long',
    last_name: 'W',
    email: 'test@gmail.com',
    ip_address: '192.168.0.1',
    latitude: 51.509865,
    longitude: -1.282
  },
  {
    id: 3,
    first_name: 'test max lat',
    last_name: 'N',
    email: 'test@gmail.com',
    ip_address: '192.168.0.1',
    latitude: 52.235,
    longitude: -0.118092
  },
  {
    id: 4,
    first_name: 'test max lat',
    last_name: 'S',
    email: 'test@gmail.com',
    ip_address: '192.168.0.1',
    latitude: 50.78054,
    longitude: -0.118092
  },
  {
    id: 5,
    first_name: 'control test',
    last_name: 'London',
    email: 'test@gmail.com',
    ip_address: '192.168.0.1',
    latitude: 51.509865,
    longitude: -0.118092
  },
  {
    id: 6,
    first_name: 'control test E',
    last_name: 'E',
    email: 'test@gmail.com',
    ip_address: '192.168.0.1',
    latitude: 51.509865,
    longitude: 1.044
  }
];

const Location = 'London';

const distance = 50;

describe('TEST filterUsersByDistanceAndLocation Func', () => {
  test('When passed a array of users returns those that live within 50 miles of london', () => {
    expect(filterUsers(users, Location, distance)).toEqual([
      {
        id: 5,
        first_name: 'control test',
        last_name: 'London',
        email: 'test@gmail.com',
        ip_address: '192.168.0.1',
        latitude: 51.509865,
        longitude: -0.118092
      },
      {
        id: 6,
        first_name: 'control test E',
        last_name: 'E',
        email: 'test@gmail.com',
        ip_address: '192.168.0.1',
        latitude: 51.509865,
        longitude: 1.044
      }
    ]);
  });

  test('When passed a array of users returns those that live within 60 miles of london', () => {
    expect(filterUsers(users, Location, 60)).toEqual(users);
  });

  test('When passed a array of users returns those that live within 40 miles of london', () => {
    expect(filterUsers(users, Location, 40)).toEqual([
      {
        id: 5,
        first_name: 'control test',
        last_name: 'London',
        email: 'test@gmail.com',
        ip_address: '192.168.0.1',
        latitude: 51.509865,
        longitude: -0.118092
      }
    ]);
  });
});
