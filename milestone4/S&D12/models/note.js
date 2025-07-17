const { DataTypes } = require('sequelize')
const sequelize = require('../db') // your Sequelize instance

const Note = sequelize.define('Note', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  important: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'notes', // sets the table name explicitly
  timestamps: true    // adds createdAt & updatedAt automatically
})

module.exports = Note