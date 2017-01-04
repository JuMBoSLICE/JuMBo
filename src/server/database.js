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
  },
  name: {
    type: Sequelize.STRING,
    field: 'first_name',
  }
}, {
  freezeTableName: true
});


// Projects table
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


// Tasks table
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

// add new user method (on sign-up)
Users.sync().then(function () { //forces drop and re-add of table
  // Users.create({
  //   username: 'batman',
  //   password: 'rachel',
  //   name: 'morgan'
  // }).then(function (user) {
  //   user.setProjects(Projects, {title: 'save rachel', summary: 'kill joker'})
  // });
});

Projects.sync().then(function () { //forces drop and re-add of table
  // Projects.create().then(function (project) {
  // });
});

Tasks.sync({ force: true }).then(function () { //forces drop and re-add of table
  Tasks.create({
    taskName: 'new suit',
    status: 'in progress',
    owner: 1,
    content: 'blah blah'
  }).then(function (task) { });
});

Users.belongsToMany(Projects, { through: 'ProjectUsers' });
Projects.belongsToMany(Users, { through: 'ProjectUsers' });

Users.create({
  username: 'batman',
  password: 'rachel',
  name: 'morgan'
}).then(function (user) {
  user.setProjects(Projects, { title: 'save rachel', summary: 'kill joker' })
});

Tasks.belongsTo(Projects);