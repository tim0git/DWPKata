const apiRouter = require('express').Router();
const { sendRoutes } = require('../error/errorHandling');
const {
  getUsersByLocation,
  getUsersByGeolocation
} = require('../controller/users.controller');

// apiRouter.use('/geolocation', );
apiRouter.route('/city/:Location/users').get(getUsersByLocation);

// /api/geolocation/London/users?distance=50
apiRouter.route('/geolocation/:Location/users').get(getUsersByGeolocation);

// /api send a list of all available routes
apiRouter.route('/').all(sendRoutes);

module.exports = apiRouter;
