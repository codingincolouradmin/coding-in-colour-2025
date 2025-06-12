const notesRouter = require('express').Router()


// In-memory notes storage, lacks persistence
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

/**
 * @description Returns all note resources
 * @route GET /api/notes/
 * @returns {object} 200 - Notes collection
 */
notesRouter.get('/', (request, response, next) => {
  try {
    response.status(200).send(notes)
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
notesRouter.get('/:id', (request, response, next) => {
  try {
    const id = Number(request.params.id)
    const note = notes.find(p => p.id == id)
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
notesRouter.post('/', (req, res, next) => {
  try {
    const { content, important } = req.body

    // If missing content
    if (content === undefined) {
      return res.status(400).send({ error: 'content mising' })
    }

    // Create the note and add it
    const newNote = {
      content,
      important: important !== undefined ? important : false,
      id: Math.floor(Math.random() * 10000)
    }
    notes = notes.concat(newNote)
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

module.exports = productsRouter