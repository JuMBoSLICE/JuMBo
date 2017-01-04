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
        res.redirect
      }
    })
  }
}

module.exports = UserController;
