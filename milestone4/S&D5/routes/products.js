const productsRouter = require('express').Router()

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

module.exports = productsRouter