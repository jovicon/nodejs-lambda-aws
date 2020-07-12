// spotifyAPI.js - spotify route module.
'use strict'

var express = require('express')
var spotifyAPI = express.Router()

// Home page route.
spotifyAPI.get('/', function (req, res) {
    res.send('Wiki home page')
})

// About page route.
spotifyAPI.get('/about', function (req, res) {
    res.send('About this wiki')
})

module.exports = spotifyAPI