// index.js - spotify component.
'use strict'

const express = require('express')
const spotify = express()

const routes = require('./spotifyAPI')

// importing routes
spotify.use('/', routes)

module.exports = spotify