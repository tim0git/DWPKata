const geoDistance = require('geo-distance-helper');

exports.filterUsers = (users, Location, distance) => {
  const geoLocations = {
    London: {
      latitude: 51.509865,
      longitude: -0.118092
    }
  }

  const KMtoMRatio = 1.60934;

  return users.filter(user => {
    const userLocation = {
      lat: parseFloat(user.latitude),
      lng: parseFloat(user.longitude)
    };

    const geoLocation = {
      lat: geoLocations[Location].latitude,
      lng: geoLocations[Location].longitude
    };

    const distance_KM = geoDistance(userLocation, geoLocation);

    const miles = distance_KM / KMtoMRatio;

    return miles <= distance;
  });
};
