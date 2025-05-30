const { logEvents } = require('./logEvents');

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}\t${err.message}\t${err.stack}`, 'errorlog.txt');
    console.log(`${err.name}\t${err.message}\t${err.stack}`);
    next();
}

module.exports = errorHandler;