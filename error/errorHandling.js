const availableRoutes = require('./availableRoutes.json');

exports.sendRoutes = (req, res, next) => {
  res.status(404).send({ availableRoutes });
};

exports.handle405 = (req, res, next) => {
  res.status(405).send({
    message: 'method not allowed please see /api for available end points'
  });
};

exports.handleCustomError = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ message: err.msg });
  } else {
    next(err);
  }
};

exports.handleInternalError = (err, req, res) => {
  console.log(err);
  res.status(500).send({ message: 'Internal server error' });
};
