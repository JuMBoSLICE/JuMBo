const Users = require('./../models/UserModel');

const UserController = {
  signup: function(req, res) {
    Users.create({
      username: req.body.username,
      password: req.body.password,
      name: req.body.name
    }).then(function(user) {
      res.status(200).json('New user created: ', user);
    });
  },
  login: function(req, res) {
    Users.findOne({
      username: req.body.username
    }).then(function(user) {
      if (user.password === req.body.password) {
        // UPDATE ACCORDINGLY FOR VALID LOGIN
        res.redirect('/dashboard')
      } else {
        // UPDATE ACCORDINGLY FOR INVALID LOGIN (display message 'incorrect')
        res.redirect('/login')
      }
    });
  }
}

module.exports = UserController;
