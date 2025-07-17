const mongoose = require('mongoose')
const config = require('./utils/config')

const connectDB = async () => {
  try {
    await mongoose.connect(config.DATABASE_URL)
    console.log('MongoDB connected')
  } catch (error) {
    console.log('DB connection error: ', error.message)
  }
}

module.exports = connectDB