const express = require("express");
const app = express();
const queryLogger = require("./middlewares/queryLogger");
const cors = require("cors");
const config = require("./utils/config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose
  .connect(config.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB:", err.message);
  });

app.use(cors());
// app.use(express.static("build"));
// app.use(express.json());
app.use(bodyParser.json());
// app.use(queryLogger());

module.exports = app;
