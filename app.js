'use strict'

const express = require('express') 
const app = express()

const spotify = require('./components/spotify/index')

// importing routes
app.use('/spotify', spotify)

// Lambda
module.exports = app