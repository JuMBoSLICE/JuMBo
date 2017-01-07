const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://cwnrvpli:yIg8-4inFfwDwP5mceLaTHWn8GBKMf5K@elmer.db.elephantsql.com:5432/cwnrvpli');

sequelize.authenticate().then(function() {
  console.log('Connected!');
}).catch(function(err) {
  console.log('Error: ', err);
});

module.exports = sequelize;
