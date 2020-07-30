const express = require('express');

const apiRouter = require('./routes/api.router');

const {
  handleCustomError,
  handleInternalError
} = require('./error/errorHandling');

const app = express();

app.use(express.json());

// working
app.use('/api', apiRouter);

// error handler
app.use(handleCustomError);
app.use(handleInternalError);

module.exports = app;
