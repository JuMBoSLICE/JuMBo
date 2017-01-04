const express = require('express');
// var fs = require('fs');
// const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const pg = require('pg');
const Sequelize = require('sequelize');

const app = express();

const sequelize = new Sequelize('postgres://zzblcmad:7pM3odT6TkIDgJkOh4bhouvlGIWXdXxg@elmer.db.elephantsql.com:5432/zzblcmad');

app.use(express.static('src'));




app.listen(port, () => {
  console.log("Listening on port " + port);
});

