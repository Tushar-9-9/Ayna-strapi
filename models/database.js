const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', // This is the database file that will be created in your project
});

module.exports = sequelize;
