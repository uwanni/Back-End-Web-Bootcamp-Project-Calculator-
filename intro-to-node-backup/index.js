/* const fs = require("fs");
fs.copyFileSync("file2.txt", "file1.txt"); */

/* const supervillains = require("supervillains");
console.log(supervillains.random()); */

/* console.log("Hi Nodemon, Hi "); */

const express = require("express");
const bodyParser = require("body-parser");

const App = express();
App.use(bodyParser.urlencoded({ extended: true }));

/* App.get("/", function (req, res) {
  res.send("Hello World");
}); */

App.post("/", (req, res) => {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;
  res.send("The answer is " + result);
});

App.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

App.listen(3000, function () {
  console.log("The server is running on port 3000.");
});
