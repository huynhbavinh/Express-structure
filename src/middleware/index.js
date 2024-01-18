'use strict'

class Middleware {
    static async checkApiAllow (req, res, next) {
        /**
         * 1. Check if the header includes the API-X-KEY
         * 2. Check if the IP in the black list
         * 3. Return next
         */
        next();
    }
}

module.exports = Middleware;