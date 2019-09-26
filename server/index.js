"use strict";

const express = require("express");
const path = require("path");
const volleyball = require("volleyball");
const app = express();
const fs = require("fs");

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

app.post("/words", (req, res) => {
  const seed = path.join(__dirname, "./seed.json");
  const words = JSON.parse(fs.readFileSync(seed, "utf8"));

  if (words.indexOf(req.body.name) == -1) {
    res.status(200).send("Non trouvé");
  } else {
    res.status(200).send("Trouvé");
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
}); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

var port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Listening on port " + port);
});

module.exports = app;
