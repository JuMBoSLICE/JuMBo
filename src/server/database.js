const Sequelize = require('sequelize');




sequelize.authenticate().then(function() {
  console.log('Connected!');
}).catch(function(err) {
  console.log('Error: ', err);
});

module.exports = sequelize;
