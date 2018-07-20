'use strict'
const request = require('request')

function getMovies(req, res, next) {
    request('https://sela-test.herokuapp.com/assets/hkzxv.json', { json: true }, (err, resp, body) => {
        if (err) return res.status(500).send({ message: `${err}` }).end()
        res.status(resp.statusCode).send({ message: body }).end()
        next()
    })
}

module.exports = getMovies