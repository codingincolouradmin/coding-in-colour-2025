const { Sequelize } = require('sequelize')
const config = require('./utils/config')

const sequelize = new Sequelize(config.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
})

module.exports = sequelize