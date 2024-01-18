'use strict'

const express = require('express');
const router = express.Router();
const Logger = require('../../lib/logger')

router.get('/check', (req, res, next) => {
    const logger = new Logger('[Health Check]')
    logger.log('Server run normally', 'Health check success')

    res.status(201).json({
        status: 200
    })
})

module.exports = router;