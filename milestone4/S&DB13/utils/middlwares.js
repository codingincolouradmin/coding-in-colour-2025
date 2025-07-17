const date = require("date-and-time");
const now = new Date();
date.format(now, "YYYY/MM/DD HH:mm:ss");

// logger middleware
const logger = (req, res, next) => {
  console.log(`Incoming request ${req.method} sent to localhost:3000${req.url} at ${now}`);
  next();
}

// error logger middleware
const errorLogger = (error, req, res, next) => {
  console.error(`error occured at ${now}. error message: ${error.message}`)
  next(error)
}

// error respond middleware
const errorRespond = (error, req, res, next) => {
  res.status(error.status).send(error.message)
}

const endPointNotFound = (req, res) => {
  res.status(404).send('page not found')
}


module.exports = {
  logger,
  errorLogger,
  errorRespond,
  endPointNotFound,
};
