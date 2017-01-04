const Sequelize = require('sequelize');
const sequelize = require('./../database');

const Projects = sequelize.define('projects', {
  title: {
    type: Sequelize.STRING,
    field: 'project_title',
  },
  summary: {
    type: Sequelize.STRING,
    field: 'summary',
  },
}, {
  freezeTableName: true
});

Projects.sync();

module.exports = Projects;
