const Sequelize = require('sequelize');

var connection = new Sequelize ('ikeadb', '', '', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
  logging: false
});

connection.authenticate()
  .then(() => {
    console.log('Connected to the database!')
  })
  .catch(err => {
    console.error(err)
  })

module.exports = connection;