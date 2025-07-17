const notesRouter = require('express').Router()
const Note = require('../models/note') 

/**
 * @description Returns all note resources
 * @route GET /api/notes/
 * @returns {object} 200 - Notes collection
 */
notesRouter.get('/', async (request, response, next) => {
  try {
    const notes = await Note.findAll()
    response.status(200).json(notes)
  } catch (error) {
    next(error)
  }
})

/**
 * @description Returns a single note by id identifier
 * @route GET /api/notes/{id}
 * @param {string} id.param.required - The note's id
 * @returns {object} 200 - Note object
 * @returns {Error} 404 - Note not found
 */
notesRouter.get('/:id', async (request, response, next) => {
  try {
    const id = request.params.id
    const note = await Note.findByPk(id)
    if (note) {
      response.status(200).json(note)
    } else {
      response.status(404).send({ error: "note not found" })
    }
  } catch (error) {
    next(error)
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
    const { content, important } = request.body

    // If missing content
    if (content === undefined) {
      return response.status(400).send({ error: 'content mising' })
    }

    // Create the note and add it
    const newNote = await Note.create({
      content,
      important: important !== undefined ? important : false
    })
    response.status(201).json(newNote)
  } catch (error) {
    next(error)
  }
})

/**
 * @description Updates a note's content or importance
 * @route PUT /api/notes/{id}
 * @param {string} id.param.required - The note's id
 * @param {string} req.body.content - Updated content
 * @param {boolean} req.body.importance - Updated importance
 * @returns {object} 201 - Updated Not object
 * @returns {object} 400 - Error if content missing
 * @returns {Error} 404 - Note not found
 */
notesRouter.put('/:id', async (request, response, next) => {
  try {
    const id = request.params.id
    const { content, important } = request.body

    // If missing content
    if (content === undefined && important === undefined) {
      return response.status(400).send({ error: 'content mising' })
    }

    // If note does not exist
    const note = await Note.findByPk(id)
    if (!note) {
      return response.status(404).send({ error: 'note not found' })
    }

    // Perform update
    if (content !== undefined) note.content = content
    if (important !== undefined) note.important = important

    await note.save()
    response.status(200).json(note)
  } catch (error) {
    next(error)
  }
})

/**
 * @description Deletes a single note by id identifier
 * @route DELETE /api/notes/{id}
 * @param {string} id.path.required - The note's id
 * @returns {} 204 - Request performed
 * @returns {Error} 404 - Note not found
 */
notesRouter.delete('/:id', async (request, response, next) => {
  try {
    const id = request.params.id

    const deleted = await Note.destroy({ where: { id } })

    // if note not found 
    if (deleted === 0) {
      return response.status(404).json({ error: 'note not found' })
    }
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = notesRouter