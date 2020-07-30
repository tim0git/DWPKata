const { fetchUsersByLocation, fetchAllUsers } = require('../apiCall');
const { formatLocationInput } = require('../utils/formatLocation');
const {
  filterUsersByDistanceAndLocation
} = require('../utils/filterUsersByDistance');

exports.getUsersByLocation = (req, res, next) => {
  const { Location } = req.params;

  const formattedLocation = formatLocationInput(Location);

  fetchUsersByLocation(formattedLocation)
    .then(users => {
      res.status(200).send({ users });
    })
    .catch(next);
};

exports.getUsersByGeolocation = (req, res, next) => {
  const { Location } = req.params;
  const { distance } = req.query;

  const formatedLocation = formatLocationInput(Location);

  fetchAllUsers()
    .then(users => {
      const filteredUsers = filterUsersByDistanceAndLocation(
        users,
        formatedLocation,
        distance
      );
      res.status(200).send({ users: filteredUsers });
    })
    .catch(next);
};

