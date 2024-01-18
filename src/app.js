'use strict'
require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {
  default: helmet,
} = require('helmet');
const compression = require('compression');
const routers = require('./routers/index')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(helmet()); // MUST lib: protect the api
app.use(compression()) // MUST lib: increase performance
app.use(routers)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((error, req, res, next)=> {
  const errStatus = error.status || 500;
  return  res.status(errStatus).json({
      status: 'error',
      code: errStatus,
      message: error.message || 'Internal server error',
  })
})

module.exports = app;
