const express = require('express');
const app = express();
require('dotenv').config()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', function (req, res) {
    res.render('home')
})

app.get ('*', function (req, res) {
    res.status(404).send ('<h1>404 page</h1>')
})
app.listen(process.env.PORT)