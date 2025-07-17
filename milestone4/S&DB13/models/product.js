const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize')

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
})

module.exports = Product;