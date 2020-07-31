const apiRouter = require('express').Router();
const { sendRoutes } = require('../error/errorHandling');
const {
  getUsersByLocation,
  getUsersByGeolocation
} = require('../controller/users.controller');

const { handle405 } = require('../error/errorHandling');

// @desc send back a list of users listed as living at the given location
// @Public
// @ Route: /city/London/users
apiRouter.route('/city/:Location/users').get(getUsersByLocation).all(handle405);

// @desc send back a list of users with co-ordinates within given distance of the given location
// @Public
// @ Route: /api/geolocation/London/users?distance=50
apiRouter
  .route('/geolocation/:Location/users')
  .get(getUsersByGeolocation)
  .all(handle405);

// @desc send a list of all available routes
// @Public
// @ Route: /api
apiRouter.route('/').all(sendRoutes);

module.exports = apiRouter;
