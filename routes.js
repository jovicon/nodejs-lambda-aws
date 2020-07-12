'use strict'

const express = require('express')
const routes = express()

// declaring api by components
const spotify = require('./components/spotify/index')

console.log(spotify);
// assigning api components to base routes
// routes.use('/spotify', spotify.routes)

module.exports = routes