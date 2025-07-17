const express = require('express');
const router = express.Router();

// Define a route for the root URL
router.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Define a new route
router.get('/about', (req, res) => {
  res.send('About Page');
});

module.exports = router;
