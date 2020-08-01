const { fetchUsersByLocation, fetchAllUsers } = require('../dataProvider');
const { formatLocationInput } = require('../utils/formatLocation');
const { filterUsers } = require('../utils/filterUsers');

exports.getUsersByLocation = (req, res, next) => {
  const { Location } = req.params;

  const formattedLocation = formatLocationInput(Location);

  fetchUsersByLocation(formattedLocation)
    .then(users => {
      return users.length === 0
        ? next({
            status: 400,
            message: `No users found at ${Location}`
          })
        : res.status(200).send({ users });
    })
    .catch(next);
};

exports.getUsersByGeolocation = (req, res, next) => {
  const { Location } = req.params;
  const { distance } = req.query;

  if (!distance)
    return next({
      status: 400,
      message: 'Please provide a distance in miles must be greater than 0'
    });

  const formatedLocation = formatLocationInput(Location);

  fetchAllUsers()
    .then(users => {
      const filteredUsers = filterUsers(users, formatedLocation, distance);
      return filteredUsers.length === 0
        ? next({
            status: 400,
            message: 'No users found at this location within the given distance'
          })
        : res.status(200).send({ users: filteredUsers });
      //
    })
    .catch(next);
};
