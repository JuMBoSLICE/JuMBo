const express = require('express');
// var fs = require('fs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const pg = require('pg');
const db = require('./database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('src'));

app.get('*', (req, res) => res.status(200).send({
  message: 'codeLaborate!'
}));

app.listen(port, () => {
  console.log("Listening on port " + port);
});

