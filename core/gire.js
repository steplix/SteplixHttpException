'use strict';

const Http = require('http-constants');
const CustomError = require('./custom');

class GireError extends CustomError {
    constructor (message, code = Http.codes.INTERNAL_SERVER_ERROR, extra = null) {
        super(message);
        this.name = this.constructor.name;
        this.msg = message;
        this.code = 200;
        this.codigo_respuesta = code;
        this.extra = extra;
        Error.captureStackTrace(this, this.constructor);
    }

    toJson () {
        const response = {
            msg: this.msg,
            codigo_respuesta: this.codigo_respuesta
        };

        const json = { ...this.extra, ...response };
        return json;
    }
}

module.exports = GireError;
