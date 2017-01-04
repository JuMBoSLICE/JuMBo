const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://zzblcmad:7pM3odT6TkIDgJkOh4bhouvlGIWXdXxg@elmer.db.elephantsql.com:5432/zzblcmad');

sequelize.authenticate().then(function() {
  console.log('Connected!');
}).catch(function(err) {
  console.log('Error: ', err);
});

// add new user method (on sign-up)
// Users.sync({ force: true }).then(function () { //forces drop and re-add of table
//   Users.create({
//     username: 'batman',
//     password: 'rachel',
//     name: 'morgan'
//   }).then(function (user) {});
// });

// Projects.sync({ force: true }).then(function () { //forces drop and re-add of table
//   Projects.create({
//     title: 'save rachel',
//     summary: 'kill joker'
//   }).then(function (project) {
//     const user = Users.findOne({username: 'batman'});
//     project.setUsers(user, {username: 'batman'})
//   });
// });

// ProjectUsers.sync().then(function () {});

// Tasks.sync({ force: true }).then(function () { //forces drop and re-add of table
//   Tasks.create({
//     taskName: 'new suit',
//     status: 'in progress',
//     owner: 1,
//     content: 'blah blah'
//   }).then(function (task) {});
// });

module.exports = sequelize;