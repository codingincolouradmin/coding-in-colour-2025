const express = require('express') // Express node-server application
const morgan = require('morgan') // Logger middleware
const middlewares = require('./utils/middlewares') // Import middlewares
const config = require('./utils/config')
const sequelize = require('./db')
const baseRouter = require('./routes/base')
const notesRouter = require('./routes/notes')

const app = express();  // Creates the express application

// Connect to PostgreSQL Database
console.log(`connecting to ${config.DATABASE_URL}`)
sequelize
  .authenticate()
  .then(() => {
    console.log('connected to PostgreSQL')
    // Syncs models, does not drop tables if they exist
    return sequelize.sync()
  })
  .catch((error) => {
    console.log('error connecting to PostgreSQL: ', error.message)
  })


app.use(express.json()) // Built-in middleware to parse JSON bodies sent as part of requests

/**
 * Tells express to serve static files from public directory at specific endpoints
 * - visiting http://localhost:PORT/ serves public/index.html
 */
app.use(express.static('public'))

/**
 * Logging middleware
 *  - We want this first, to log our request, and use next() to pass control onwards
 */
app.use(morgan(':method :url :status :res[content-length] :date[iso] - :response-time ms'))
// app.use(middlewares.logger)

app.use('/api/', baseRouter)
app.use('/api/notes/', notesRouter)

/**
 * Error Handling middleware
 *  - We want this last, and we use next() to pass control of the middleware onwards
 *  - Control is relevant for how we've setup our error handling
 */
app.use(middlewares.errorLogger)      // Receives error, logs it, passes to next error middleware
app.use(middlewares.errorResponse)    // Receives error, returns response
app.use(middlewares.unknownEndpoint)  // Unknown endpoint handler

module.exports = app