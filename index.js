'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error connection database: ${err}`)
    }
    console.log('connection success db')

    app.listen(config.port, () => {
        console.log(`API REST online in http://localhost:${config.port}`)
    })
})