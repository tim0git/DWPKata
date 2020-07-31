const geoDistance = require('geo-distance-helper');

const point1 = {
  lat: 51.509865,
  lng: -0.118092
};

const point2 = {
  lat: 51.509865,
  lng: -0.118092
};

const point3 = {
  lat: 53.483959,
  lng: -2.244644
};

const pointStrings = {
  lat: '53.483959',
  lng: '-2.244644'
};

describe('TEST NPM package geoDistance', () => {
  test('When passed a array of users returns those that live within 40 miles of london', () => {
    const distance = geoDistance(point1, point2);
    expect(distance).toBe(0);
  });
  test('When passed the co-ordinates for london should return the distance between the two citys', () => {
    const distance = geoDistance(point1, point3);
    expect(distance.toFixed(2)).toBe('262.46');
  });
  test('should throw an error if passed a string for lat or long co-ordinates', () => {
    expect(() => {
      geoDistance(point1, pointStrings);
    }).toThrow('Point-2 must have valid lat and lng attributes');
  });
});
