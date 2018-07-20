'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api', api)

app.get('/', (req, res) => {
    res.status(200).send({ api: 'API online' })
})

module.exports = app