const express = require('express');
const app = express();
require('dotenv').config()

app.get('/', function (req, res) {
    res.send ('Hello world!')
})

app.listen(process.env.PORT)