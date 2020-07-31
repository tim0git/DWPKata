const { fetchUsersByLocation, fetchAllUsers } = require('../dataProvider');
const { formatLocationInput } = require('../utils/formatLocation');
const { filterUsers } = require('../utils/filterUsers');

exports.getUsersByLocation = (req, res, next) => {
  const { Location } = req.params;

  const formattedLocation = formatLocationInput(Location);

  fetchUsersByLocation(formattedLocation)
    .then(users => {
      return users.length === 0
        ? res.status(400).send({ message: 'No users found at this location' })
        : res.status(200).send({ users });
    })
    .catch(next);
};

exports.getUsersByGeolocation = (req, res, next) => {
  const { Location } = req.params;
  const { distance } = req.query;

  const formatedLocation = formatLocationInput(Location);

  fetchAllUsers()
    .then(users => {
      const filteredUsers = filterUsers(users, formatedLocation, distance);
      res.status(200).send({ users: filteredUsers });
    })
    .catch(next);
};
