require('dotenv').config();
const models = require('./models/index');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

models.sequelize
  .sync({
    force: true //Take this out if you don't want to drop db on server startup
  })
  .then(() => {
    console.log("Successfully connected and synced db");

    app.listen(5000, () => {
      console.log("Server listening on port ", PORT)
    });
  })
  .catch((err) => {
    console.log("Could not connect", err);
  });
