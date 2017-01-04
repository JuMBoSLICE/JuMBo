const Sequelize = require('sequelize');
const sequelize = require('./../database');

const Users = sequelize.define('users', {
  username: {
    type: Sequelize.STRING,
    field: 'username',
  },
  password: {
    type: Sequelize.STRING,
    field: 'password',
  },
  name: {
    type: Sequelize.STRING,
    field: 'first_name',
  }
}, {
  freezeTableName: true
});

Users.sync();

module.exports = Users;