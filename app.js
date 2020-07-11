'use strict'

const express = require('express') 
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
}) 


// Web
// const port = process.env.PORT || 3000 
// app.listen(port, () => console.log(`Server is listening on port ${port}.`)) 

// Lambda
module.exports = app