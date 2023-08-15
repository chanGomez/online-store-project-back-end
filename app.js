const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const articlesController = require("./controllers/articlesController")
const commentsControllers = require("./controllers/commentsControllers")

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/articles", articlesController)
app.use("/comments", commentsControllers)

app.get("/", (req, res) => {
    res.send("Welcome to Article!");
  });

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
