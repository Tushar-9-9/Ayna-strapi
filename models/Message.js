const { DataTypes } = require('sequelize');
const sequelize = require('./database');
const User = require('./User');  // Ensure this is a Sequelize model

const Message = sequelize.define('Message', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fromUserId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',  // Use the table name string for the reference
      key: 'id',
    },
  },
});

module.exports = Message;
