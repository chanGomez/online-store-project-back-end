const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Welcome to Article!");
  });

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
