const express = require('express');
// var fs = require('fs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const pg = require('pg');
const db = require('./database');
const path = require('path');
const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');
const TaskController = require('./controllers/TaskController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.status(200);
  res.set({'Content-Type': 'text/html; charset=utf-8'});
  res.sendFile(path.join(__dirname, '/../client/index.html'));
})

app.get('/style.css', function (req, res) {
  res.status(200);
  res.set({'Content-Type': 'text/css; charset=utf-8'});
  res.sendFile(path.join(__dirname, '/../client/style.css'));
})

app.get('/bundle.js', function (req, res) {
  res.status(200);
  res.set({'Content-Type': 'application/json; charset=utf-8'});
  res.sendFile(path.join(__dirname, '/../client/public/bundle.js'));
})

app.use(express.static(path.join( __dirname, '../client/')));

// add new user to database from sign-up page
app.post('/signup', UserController.signup);

// authenticate existing user from login page
app.post('/login', UserController.login);

// create new project row in database
app.post('/projects/create', ProjectController.create);

app.listen(port, () => {
  console.log("Listening on port " + port);
});

