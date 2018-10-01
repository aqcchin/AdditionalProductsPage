const Sequelize = require('sequelize');
const connection = require('.');

const designers = connection.define('designers', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  designerName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  productLine: {
    type: Sequelize.STRING,
    allowNull: false
  },
  thoughts: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { timestamps: false });

const products = connection.define('products', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  productLine: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  designerName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  stars: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  reviewCount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { timestamps: false });

connection.sync ({ force: false })
  .then (() => {
    console.log('Successfully synced database')
  })
  .catch (err => {
    console.log( 'Error ', err)
  });

module.exports = { designers, products }