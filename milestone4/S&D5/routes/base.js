const baseRouter = require('express').Router()

// GET for root URL
baseRouter.get('/', (req, res) => {
  res.send('Hello World!')
})

// GET alternate route
baseRouter.get('/about', (req, res) => {
  res.send('About Page!')
})

module.exports = baseRouter