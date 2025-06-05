const baseRouter = require('express').Router()

// GET for root URL
baseRouter.get('/', (req, res) => {
  res.send('Hello World!')
})

// GET alternate route
baseRouter.get('/about', (req, res) => {
  res.send('About Page!')
})

// ERROR test
baseRouter.get('/error', (req, res, next) => {
  const err = new Error('This is a test error')
  next(err)
})

module.exports = baseRouter