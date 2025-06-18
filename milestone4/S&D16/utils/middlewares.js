const date = require('date-and-time')
const config = require('./config')

const logger = (req, res, next) => {
  const currentTime = new Date();
  date.format(currentTime, "YYYY/MM/DD HH:mm:ss")
  console.log(`Incoming request ${req.method} sent to localhost:${config.PORT}${req.url} at ${currentTime}`)
  next() // We pass control onwards, and since this logger comes first, the request then ideally gets caught at the appropriate endpoint
}

const errorLogger = (error, req, res, next) => {
  const currentTime = new Date();
  date.format(currentTime, "YYYY/MM/DD HH:mm:ss")
  console.log(`Error occured at ${currentTime}`)
  next(error)
}

const errorResponse = (error, req, res, next) => {
  res.status(error.status).send(error.message)
  // We simply return a response
}

const unknownEndpoint = (req, res, next) => {
  res.status(404).send("Unknown endpoint")
}

module.exports = {
  logger,
  errorLogger,
  errorResponse,
  unknownEndpoint
}