'use strict'

class Logger {
    constructor(header){
        this.headerLogMsg = header;
    }
    log(...msg) {
        this.headerLogMsg = this.headerLogMsg + ' | ' + msg.join(', ')
        console.log(this.headerLogMsg)
    }
    error(...msg) {
        this.headerLogMsg = this.headerLogMsg + ' | ' + msg.join(', ')
        console.error(this.headerLogMsg)
    }
}

module.exports = Logger;