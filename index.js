const express = require('express');
const app = express();
require('dotenv').config()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.render('home')
})

app.use('/places', require('./controllers/places'))

app.get ('*', function (req, res) {
    res.status(404).render('error404')
})

app.listen(process.env.PORT)