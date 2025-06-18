const express = require('express') // Express node-server application
const connectDB = require('./db') // Database connection import (mongoos)
const morgan = require('morgan') // Logger middleware
const middlewares = require('./utils/middlewares') // Import middlewares

const app = express();  // Creates the express application

connectDB() // connects to mongoDB database

app.use(express.json()) // Built-in middleware to parse JSON bodies sent as part of requests

/**
 * Logging middleware
 *  - We want this first, to log our request, and use next() to pass control onwards
 */
app.use(morgan(':method :url :status :res[content-length] :date[iso] - :response-time ms'))
// app.use(middlewares.logger)

/**
 * Routers
 * - Import all our endpoints
 */
const notesRouter = require('./routes/notes')

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
