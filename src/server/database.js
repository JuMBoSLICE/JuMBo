const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://zzblcmad:7pM3odT6TkIDgJkOh4bhouvlGIWXdXxg@elmer.db.elephantsql.com:5432/zzblcmad');

// Users table
const Users = sequelize.define('users', {
  username: {
    type: Sequelize.STRING,
    field: 'username',
  },
  password: {
    type: Sequelize.STRING,
    field: 'password',
  }
}, {
  freezeTableName: true
});

// add new user method (on sign-up)
// Users.sync().then(function () { //forces drop and re-add of table
//   Users.create().then(function (user) { });
// });


// Projects table
const Projects = sequelize.define('projects', {
  project: {
    type: Sequelize.STRING,
    field: 'project_name',
  },
  users: {
    type: Sequelize.INTEGER, // ???
    field: 'project_users',
  },
  summary: {
    type: Sequelize.STRING,
    field: 'summary',
  },
  tasks: {
    type: Sequelize.INTEGER, // ???
    field: 'tasks',
  }
}, {
  freezeTableName: true
});


// Tasks table
// const Tasks = sequelize.define('tasks', {
  
// })
