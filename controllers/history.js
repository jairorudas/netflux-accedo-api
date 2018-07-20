'use strict'

const History = require('../models/history')

function getHistories(req, res) {
    let userId = req.params.id;
    console.log(userId);

    History.findById(userId, (err, history) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })

        return res.status(200).send({ history: history })
    })
}

function saveHistory(req, res) {
    let history = new History();
    let { id, name } = req.body;

    history.id = id;
    history.show = name

    history.save((err, historyStored) => {

        if (err) res.status(500).send({ message: `Error to save on db: ${err} ` })

        res.status(200).send({ history: historyStored })
    })
}

function updateHistory(req, res) {
    let userId = req.body.id
    let update = {
        id: userId,
        show: req.body.name
    }
    console.log('update', update);

    History.findByIdAndUpdate(userId, update, (err, historyUpdated) => {
        if (err) res.status(500).send({ message: `Error when updated history: ${err}` })

        res.status(200).send({ history: historyUpdated })
    })
}

module.exports = {
    getHistories,
    saveHistory,
    updateHistory
}