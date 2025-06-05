const productsRouter = require('express').Router()
// data validator
const { body, validationResult } = require('express-validator')

// In-memory product storage, lacks persistence
let products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Smartphone', price: 499.99 }
];

/**
 * @description Returns all product resources
 * @route GET /api/products/
 * @returns {object} 200 - Products collection
 */
productsRouter.get('/', (req, res, next) => {
  try {
    res.status(200).send(products)
  } catch (error) {
    next(error)
  }
})

/**
 * @description Returns a single product by id identifier
 * @route GET /api/products/{id}
 * @param {string} id.path.required - The product's id
 * @returns {object} 200 - Product object
 * @returns {Error} 404 - Product not found
 */
productsRouter.get('/:id', (req, res, next) => {
  try {
    const id = req.params.id
    const product = products.find(p => p.id == id)
    if (product) {
      res.status(200).send(product)
    } else {
      res.status(404).send({ error: "product not found" })
    }
  } catch (error) {
    next(error)
  }
})

/**
 * @description Creates a new product according to data passed
 * @route POST /api/products
 * @param {string} req.body.name - Name of Product
 * @param {Number} req.body.price - Price of Product
 * @returns {object} 201 - Created Product object
 */
productsRouter.post('/', (req, res, next) => {
  try {
    const { name, price } = req.body

    // Conditional checks on name, price
    if (!price || price < 0) {
      return res.status(400).send({ error: "invalid price" })
    }

    // TODO: Not using a validator, custom checks
  } catch (error) {
    next(error)
  }
})
// productsRouter.post('/',
//   [
//     body('name').isString().isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
//     body('price').isNumeric({ gt: 0 }).withMessage('Price must be a positive number')
//   ],
//   (req, res, next) => {
//   try {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//       console.log(errors)
//       return res.status(400).json({ error: JSON.stringify(errors.array()) })
//     }

//     const newProduct = {
//       id: Math.floor(Math.random() * 10000),
//       name: req.body.name,
//       price: req.body.price
//     }

//     products.push(newProduct)
//     res.status(201).send(newProduct)
//   } catch (error) {
//     next(error)
//   }
// })

/**
 * @description Updates a single resource by id identifier
 * @route PUT /api/products/{id}
 * @param {Number} req.body.price - Price of item
 * @returns {object} 201 - Updated Product object
 * @returns {Error} 404 - Product not found
 */
productsRouter.put('/:id', (req, res, next) => {
  try {
    // TODO - Hint: make sure you grab the important information that you need, and update the Product appropriately (the price)
  } catch (error) {
    next(error)
  }
})

/**
 * @description Deletes a single product by id identifier
 * @route DELETE /api/products/{id}
 * @param {string} id.path.required - The product's id
 * @returns {} 204 - Request performed
 */
productsRouter.delete('/:id', (req, res, next) => {
  try {
    // TODO
  } catch (error) {
    next(error)
  }
})

module.exports = productsRouter