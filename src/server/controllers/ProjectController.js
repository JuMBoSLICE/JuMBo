const Projects = require('./../models/ProjectModel');
const ProjectUsers = require('./../models/ProjectUserModel');

//create new project
const ProjectController = {
  create: function(req, res) {
    Projects.create({
      title: req.body.title,
      summary: req.body.summary
    }).then(function(project) {
      res.send({
        message: 'New project created!',
        view: 2
      })
    });
  },

//update project
  update: function(req, res) {
    Projects.findOne({
      where: {title: req.body.title}
    })
    .then(function(project) {
      project.update({
        // will the req body have updated info?
        // or just snippet to add to existing info?
        title: req.body.title,
        summary: req.body.summary
      })
      .then(function(project) {
        res.send(project.title + ' project updated: ' + project);
      });
    })
  },

//delete project
  delete: function(req, res) {
    Projects.findOne({
      where: {title: req.body.title}
    }).then(function(project) {
      project.destroy().then(function() {
        res.send('Project deleted');
      });
    });
  }
}

module.exports = ProjectController;
