const express = require('express');
const compression = require('compression')
const rateLimit = require("express-rate-limit");


const app = express();
app.use(compression())
app.use(express.json());
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 300
});
app.use(apiLimiter);


app.use("/company", require('./routes/company'))






module.exports = app;
