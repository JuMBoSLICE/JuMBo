const Sequelize = require('sequelize');
const sequelize = require('./../database');

const Projects = sequelize.define('projects', {
  title: Sequelize.STRING,
  summary: Sequelize.STRING,
  team_members: Sequelize.ARRAY(Sequelize.STRING),
  tasks: Sequelize.ARRAY(Sequelize.STRING),
  messages: Sequelize.ARRAY(Sequelize.STRING),
}, {
  freezeTableName: true
});

Projects.sync();

module.exports = Projects;
