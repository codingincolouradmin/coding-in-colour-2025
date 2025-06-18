const notesRouter = require('express').Router()
const Note = require('../models/note')

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
    const { content, important } = request.body

    const note = new Note({
      content,
      important: important || false
    })

    const savedNote = await note.save()
    response.status(201).send(savedNote)
  } catch (error) {
    next(error)
  }
})

/**
 * TODO
 * @description Updates a note's content or importance
 * @route PUT /api/notes/{id}
 * @param {string} id.param.required - The note's id
 * @param {string} req.body.content - Updated content
 * @param {boolean} req.body.importance - Updated importance
 * @returns {object} 201 - Updated Not object
 * @returns {object} 400 - Error if content missing
 * @returns {Error} 404 - Note not found
 */
notesRouter.put('/:id', (request, response, next) => {
  try {
    const id = Number(request.params.id)
    const { content, important } = request.body

    // If missing update data
    if (content === undefined && important === undefined) {
      return response.status(400).send({ error: 'content mising' })
    }

    // If note does not exist
    const note = notes.find(n => n.id == id) 
    if (!note) {
      return response.status(404).send({ error: 'note not found' })
    }

    // Perform update
    notes = notes
    .map(note => note.id == id 
      ? { ...note, content: content !== undefined ? content: note.content, important: important !== undefined ? important: note.important } 
      : note 
    )
    const updatedNote = notes.find(n => n.id == id)
    response.status(200).send(updatedNote)
  } catch (error) {
    next(error)
  }
})

/**
 * TODO
 * @description Deletes a single note by id identifier
 * @route DELETE /api/notes/{id}
 * @param {string} id.path.required - The note's id
 * @returns {} 204 - Request performed
 * @returns {Error} 404 - Note not found
 */
notesRouter.delete('/:id', (request, response, next) => {
  try {
    const id = Number(request.params.id)

    // If note does not exist
    const note = notes.find(n => n.id == id) 
    if (!note) {
      return response.status(404).send({ error: 'note not found' })
    }

    // Perform deletion
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = notesRouter