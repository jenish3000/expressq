const express = require("express");
require("dotenv").config();
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.get("/login", (req, res) => {
  res.send("Welcome to Login!");
});
app.get("/home", (req, res) => {
  res.send("Welcome to HOme!");
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
