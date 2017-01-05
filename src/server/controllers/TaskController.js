const Tasks = require('./../models/TaskModel');

const TaskController = {
  create: function(req, res) {
    Tasks.create({
      taskName: req.body.task,
      status: req.body.status,
      owner: req.body.owner,
      content: req.body.content
    }).then(function(task) {
      res.status(200).json('New task created: ', task);
    });
  },

  update: function(req, res) {
    Tasks.findOne({
      taskName: req.body.task
    }).then(function(task) {
      task.update({
        // will the req body have updated info?
        // or just snippet to add to existing info?
        taskName: req.body.task,
        status: req.body.status,
        owner: req.body.owner,
        content: req.body.content
      }).then(function(task) {
        res.status(200).json(task.taskName + ' task updated: ' + task);
      });
    })
  },

  delete: function(req, res) {
    Tasks.findOne({
      taskName: req.body.task
    }).then(function(task) {
      task.destroy().then(function() {
        res.status(200).json('Task deleted');
      });
    });
  }
}

module.exports = TaskController;
