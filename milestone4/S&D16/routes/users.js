const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response, next) => {
  try {
    const users = await User.find({})
      .populate('notes', { content: 1, important: 1 })
    response.status(200).json(users)
  } catch (error) {
    next(error)
  }
})

usersRouter.get('/:id', async (request, response, next) => {
  try {
    /**
     * - Get that particular user who has that id, remember to populate! 
     */
  } catch (error) {
    next(error)
  }
})

usersRouter.post('/', async (request, response, next) => {
  try {
    const { username, name, password } = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
      username,
      name,
      passwordHash
    })

    const savedUser = await user.save()
    response.status(201).json(savedUser)
  } catch (error) {
    next(error)
  }
})

usersRouter.put('/:id', async (request, response, next) => {
  try {
    /**
     * - For changing username, name, or password
     * - Verify if your token is correct (authentication)
     * - Check if user exists
     * - Update user/username is that's provided
     * - If password provided, do another passwordHash, and save that (Hint: user.save())
     * - Further exploration: If username is updated, does that invalidate the token for the next request?
     * - Hint: generate a new token at the end if username is updated, and return this
     */
  } catch (error) {
    next(error)
  }
})

usersRouter.delete('/:id', async (request, response, next) => {
  try {
    /**
     * - Verify if your token is correct (authentication)
     * - Check if user exists
     * - Delete the User?
     * - For further thinking -> Do we need to delete all the notes inside of this (IF deleting user does not automatically delete all notes owned by user)
     * - If so, You can grab an array of ids (notes), map the note.findByIdAndDelete(id) across this array to generate an array of promises
     * - Promise.all()
     * - Alternative, use a for loop, iterate over the notes, and inside that Note.findByIdAndDelete(id)
     * - Or, even better.... await Note.deleteMany({ user: user._id })
     */
  } catch (error) {
    next(error)
  }
})

module.exports = usersRouter

