const Projects = require('./../models/ProjectModel');
const ProjectUsers = require('./../models/ProjectUserModel');

//create new project
const ProjectController = {
  create: function(req, res) {
    // console.log('req body:', req.body);
    Projects.create({
      title: req.body.title,
      summary: req.body.summary,
      team_members: req.body.team_members,
      tasks: req.body.tasks,
      messages: req.body.messages,
    }).then(function(project) {
      console.log('PROJECT:', project);
      console.log('typeof', typeof project);
      res.json(project);
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
  },

  viewProjects: function(req, res) {
    Projects.find({})
      .then(function(projects) {
        res.json(projects);
      });
  }

}

module.exports = ProjectController;
