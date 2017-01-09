const Sequelize = require('sequelize');

//const sequelize = new Sequelize('postgres://zzblcmad:7pM3odT6TkIDgJkOh4bhouvlGIWXdXxg@elmer.db.elephantsql.com:5432/zzblcmad');
const sequelize = new Sequelize('postgres://gmopkzby:fzf6M75_2Pv39uBpHXDgbdDY8-iclyK1@elmer.db.elephantsql.com:5432/gmopkzby');


sequelize.authenticate().then(function() {
  console.log('Connected!');
}).catch(function(err) {
  console.log('Error: ', err);
});

module.exports = sequelize;
