require('dotenv').config()

const PORT = process.env.PORT
// You can put other variables here
const DATABASE_URL = process.env.DATABASE_URL

module.exports = { PORT, DATABASE_URL }