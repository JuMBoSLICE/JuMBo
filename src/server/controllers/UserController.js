const Users = require('./../models/UserModel');

const UserController = {
  signup: function(req, res) {
    Users.find({
      where: {username: req.body.username}
    })
    .then(function(user) {
      if (user) {
        return res.send({message: 'Username already exists', view: 1});
      } else {
        Users.create({
          username: req.body.username,
          password: req.body.password,
          name: req.body.name
        })
        .then(function(user) {
          res.send({message: 'New user created: ' + user, view: 0});
        });
      }
    })
  },
  login: function(req, res) {
    console.log(req.body);
    Users.findOne({
      where: {username: req.body.username}
    }).then(function(user) {
      console.log('found user: ', user);
      if (!user) {
         res.send({view: 0, message: 'Invalid Login'});
      } else if (user.password === req.body.password) {
        console.log('req body: ', req.body);
        res.send({view: 2});
      } else {
        console.log('req body: ', req.body);
        res.send({view: 0, message: 'Invalid Login'});
      }
    });
  }
}

module.exports = UserController;
