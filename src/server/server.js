<<<<<<< HEAD
var pg = require('pg');
var Sequelize = require('sequelize');
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
=======
const express = require("express");
const path = require('path');
app = express();

app.use(Express.static(path.join(__dirname, 'static')));


app.get("/", (req, res) => {});



app.listen(3000);
>>>>>>> a29b8be67c4be59d96ec15e401aa50fdf0a6218a
