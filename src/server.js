const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { AppRouter } = require("./routes");

// Initialisierung von expres
const app = express();
app.use(bodyParser.json());
// Use for development
app.use(cors());
app.use("/v1", AppRouter);

module.exports = app;
