const express = require("express");
const path = require('path');
app = express();

app.use(Express.static(path.join(__dirname, 'static')));


app.get("/", (req, res) => {});

app.post("/signup", (req, res) => {
  console.log("woo. hoo.")
})

app.listen(3000);