const Projects = require('./../models/ProjectModel');
const ProjectUsers = require('./../models/ProjectUserModel');

const ProjectController = {
  create: function(req, res) {
    Projects.create({
      title: req.body.title,
      summary: req.body.summary
    }).then(function(project) {
      res.status(200).json('New project created: ', project);
    });
  },

  update: function(req, res) {
    Projects.findOne({
      title: req.body.title
    }).then(function(project) {
      project.update({
        // will the req body have updated info?
        // or just snippet to add to existing info?
        title: req.body.title,
        summary: req.body.summary
      }).then(function(project) {
        res.status(200).json(project.title + ' project updated: ' + project);
      });
    })
  },

  delete: function(req, res) {
    Projects.findOne({
      title: req.body.title
    }).then(function(project) {
      project.destroy().then(function() {
        res.status(200).json('Project deleted');
      });
    });
  }
}

module.exports = ProjectController;
