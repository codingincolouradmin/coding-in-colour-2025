const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/user');
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Database query error:', error);
    res.sendStatus(500);
  }
});

// Get one user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (error) {
    console.error('Database query error:', error);
    res.sendStatus(500);
  }
});

// Add a new user with data validation
router.post(
  '/',
  [
    body('name').isString().isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Email must be valid')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.create({ name: req.body.name, email: req.body.email });
      res.status(201).json(user);
    } catch (error) {
      console.error('Database query error:', error);
      res.sendStatus(500);
    }
  }
);

// Update a user by ID
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send('User not found');

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    await user.save();
    res.json(user);
  } catch (error) {
    console.error('Database query error:', error);
    res.sendStatus(500);
  }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send('User not found');
    await user.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error('Database query error:', error);
    res.sendStatus(500);
  }
});

module.exports = router;
