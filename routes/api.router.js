const apiRouter = require('express').Router();
const { sendRoutes } = require('../error/errorHandling');
const {
  getUsersByLocation,
  getUsersByGeolocation
} = require('../controller/users.controller');

const { handle405 } = require('../error/errorHandling');

// apiRouter.use('/geolocation', );
apiRouter.route('/city/:Location/users').get(getUsersByLocation).all(handle405);

// /api/geolocation/London/users?distance=50
apiRouter
  .route('/geolocation/:Location/users')
  .get(getUsersByGeolocation)
  .all(handle405);

// /api send a list of all available routes
apiRouter.route('/').all(sendRoutes);

module.exports = apiRouter;
