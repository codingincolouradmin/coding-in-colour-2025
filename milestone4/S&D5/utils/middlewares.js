const date = require('date-and-time')
const config = require('./config')

const logger = (req, res, next) => {
  const currentTime = new Date();
  date.format(currentTime, "YYYY/MM/DD HH:mm:ss")
  console.log(`Incoming request ${req.method} sent to localhost:${config.PORT}${req.url} at ${currentTime}`)
  next() // We pass control onwards, and since this logger comes first, the request then ideally gets caught at the appropriate endpoint
}

module.exports = {
  logger
}