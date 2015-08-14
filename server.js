"use strict";

var express = require("express");

var app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
  });
app.get("/bundle.js", function (req, res) {
    res.sendFile(__dirname + "/bundle.js");
  });
app.listen(3000, "0.0.0.0", function (err) {
    console.log(err ? err : "Listening at http://0.0.0.0:3000");
  });
