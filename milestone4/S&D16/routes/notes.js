const notesRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Note = require('../models/note')
const User = require('../models/user')
const { response } = require('express')

/**
 * @description Returns all note resources
 * @route GET /api/notes/
 * @returns {object} 200 - Notes collection
 */
notesRouter.get('/', async (request, response, next) => {
  try {
    const notes = await Note.find({}).populate('user', { username: 1, name: 1 })
    response.json(notes)
  } catch (exception) {
    next(exception)
  }
})

/**
 * TODO
 * @description Returns a single note by id identifier
 * @route GET /api/notes/{id}
 * @param {string} id.param.required - The note's id
 * @returns {object} 200 - Note object
 * @returns {Error} 404 - Note not found
 */
notesRouter.get('/:id', async (request, response, next) => {
  try {
    const note = await Note.findById(request.params.id)
    if (note) {
      response.status(200).send(note)
    } else {
      return response.status(404).json({ error: 'note not found' })
    }
  } catch (exception) {
    next(exception)
  }
})

/**
 * @description Creates a new note according to data passed
 * @route POST /api/notes
 * @param {string} req.body.content - Content of Note
 * @param {Number} req.body.important - Importance of Note (true/false)
 * @returns {object} 201 - Created Product object
 * @returns {object} 400 - Error if content missing
 */
notesRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body
    if (!body.content) {
      return response.status(400).send({ error: 'missing contet' })
    }

    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if (!decodedToken.id) {
      return response.status(401).json({ error: 'token invalid' })
    }

    console.log('this is the decodedToken', decodedToken)

    const user = await User.findById(decodedToken.id)
    if (!user) {
      return response.status(400).json({ error: 'userId missing or not valid' })
    }

    const note = new Note({
      content: body.content,
      important: body.important || false,
      user: user._id
    })

    const savedNote = await note.save()
    user.notes = user.notes.concat(savedNote._id)
    await user.save()
    response.status(201).json(savedNote)
  } catch (error) {
    next(error)
  }
})

notesRouter.put('/:id', async (request, response, next) => {
  try {
    /**
     * - Verify if your token is correct (authentication)
     * - Check if user exists
     * - Check if the note exists  (request params id)
     * - Check if the note's user id is the same as decoded token id
     * - If yes, update content of note (Hint: update note fields and note.save())
     * - If not, return error saying note does not belong to user 403
     */
  } catch (error) {
    next(error)
  }
})

notesRouter.delete('/:id', async (request, response, next) => {
  try {
    /**
     * - Verify if your token is correct (authentication)
     * - Check if user exists
     * - Check if the note exists  (request params id)
     * - Check if the note's user id is the same as decoded token id
     * - If yes, update the user's notes (Hint: filter function), delete the note (Hint: findByIdAndDelete)
     * - If not, return error saying note does not belong to user 403
     */
  } catch (error) {
    next(error)
  }
})

module.exports = notesRouter