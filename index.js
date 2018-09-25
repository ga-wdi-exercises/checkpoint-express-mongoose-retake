const express = require('express')
const hbs = require('hbs')

var app = express()

app.use(require('./routes/index.js'))

// app.use(require('./routes/note.js'))

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
