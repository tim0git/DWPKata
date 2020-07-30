const geoDistance = require('geo-distance-helper');

exports.filterUsersByDistanceAndLocation = (users, Location, distance) => {
  const geoLocations = {
    London: {
      latitude: 51.509865,
      longitude: -0.118092
    }
  };

  const KMinAMile = 1.60934;

  const filteredUsers = users.filter(user => {
    const point1 = {
      lat: parseFloat(user.latitude),
      lng: parseFloat(user.longitude)
    };

    const point2 = {
      lat: geoLocations[Location].latitude,
      lng: geoLocations[Location].longitude
    };

    const distanceKM = geoDistance(point1, point2);

    const miles = distanceKM / KMinAMile;

    return miles <= distance;
  });

  return filteredUsers;
};
