const express = require('express') // Express node-server application
const middlewares = require('./utils/middlewares') // Import middlewares

const app = express();  // Creates the express application
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
app.use(middlewares.logger)

/**
 * Routers
 * - Import all our endpoints
 * - Base (baseline)
 * - TODO: Products
 */
const baseRoutes = require('./routes/base')

app.use('/api/', baseRoutes)

module.exports = app