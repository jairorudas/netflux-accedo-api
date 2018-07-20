'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HistorySchema = Schema({
    id: String,
    show: [{}]
})

module.exports = mongoose.model('History', HistorySchema)