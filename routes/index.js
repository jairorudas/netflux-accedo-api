'use strict'

const express = require('express')
const historyCtrl = require('../controllers/history')
const userCtrl = require('../controllers/User')
const getMovies = require('../services/getMovies')
const api = express.Router()

api.get('/history/:id', historyCtrl.getHistories)
api.post('/history', historyCtrl.saveHistory)
api.put('/history', historyCtrl.updateHistory)
    // api.post('/signup', userCtrl.signUp)
    // api.post('/signin', userCtrl.signIn)
api.get('/movies', getMovies)


module.exports = api