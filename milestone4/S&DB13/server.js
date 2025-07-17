const express = require('express');
const app = express();
const port = 3000;
const middlewares = require('./utils/middlwares')
const sequelize = require('./config/sequelize')

// logger middleware
app.use(middlewares.logger)

app.use(express.json());


// import and use routes
const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/users')
const productRoutes = require('./routes/products')

app.use('/', indexRoutes)
app.use('/users', userRoutes)
app.use('/products', productRoutes)

// Example route to test the database connection



// Error handling middleware should be added last
app.use(middlewares.errorLogger)
app.use(middlewares.errorRespond)
app.use(middlewares.endPointNotFound)


// Start the server and synchronize the database
sequelize.sync({ force: true }).then(() => {
  console.log('database connected!')
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch(err => {
  console.error(`Error syncing databsae:`, err)
})






