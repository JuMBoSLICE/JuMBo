const Sequelize = require('sequelize');
const sequelize = require('./../database');
const Projects = require('./ProjectModel')

const Tasks = sequelize.define('tasks', {
  taskName: {
    type: Sequelize.STRING,
    field: 'task_name',
  },
  status: {
    type: Sequelize.STRING,
    field: 'status',
  },
  owner: {
    type: Sequelize.INTEGER,
    field: 'assigned_to',
  },
  content: {
    type: Sequelize.STRING,
    field: 'task_content',
  },
}, {
  freezeTableName: true
});

Tasks.belongsTo(Projects);

Tasks.sync();

module.exports = Tasks;
