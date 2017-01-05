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
      console.log('found user: ', user);
      if (user.password === req.body.password) {
        console.log('req body: ', req.body);
        // UPDATE ACCORDINGLY FOR VALID LOGIN
        res.send('2');
      } else {
        console.log('req body: ', req.body);
        // UPDATE ACCORDINGLY FOR INVALID LOGIN (display message 'incorrect')
        res.send('0');
      }
    });
  }
}

module.exports = UserController;
