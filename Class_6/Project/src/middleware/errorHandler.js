const { logEvents } = require('./logEvents');

exports.errorHandler = (err, req, res, next) => {
  logEvents(`${err.name}: ${err.message}`, 'errLog.txt');
  console.error(err.stack);
  res.status(500).send(err.message);
};

// module.exports = errorHandler;
