const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')