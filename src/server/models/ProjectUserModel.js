const Sequelize = require('sequelize');
const sequelize = require('./../database');
const Users = require('./UserModel');
const Projects = require('./ProjectModel');

const ProjectUsers = sequelize.define('project_users', {}, {
  freezeTableName: true
});

ProjectUsers.belongsTo(Users);
ProjectUsers.belongsTo(Projects);

ProjectUsers.sync();

module.exports = ProjectUsers;