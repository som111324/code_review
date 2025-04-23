const express = require('express');
const app = express()
const airoutes = require('./routes/ai.routes');
const cors = require('cors')


app.use(express.json());
app.use(cors())

app.use('/ai',airoutes);
console.log("app.js is running");

module.exports = app;