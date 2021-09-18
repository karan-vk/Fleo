const express = require('express');

const app = express();
app.use(express.json());
app.use("/company", require('./routes/company'))






module.exports = app;
