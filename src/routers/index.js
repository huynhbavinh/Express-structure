'use strict'
const express = require('express');
const router = express.Router();
const Middleware = require('../middleware')

// Middleware check apiKey
router.use(Middleware.checkApiAllow);

// Register the api
router.use('/v1/api/healthcheck', require('./healthcheck'))

module.exports = router;
