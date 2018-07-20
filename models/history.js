'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    id: String,
    history: Array
})

module.exports = mongoose.model('Product', ProductSchema)