const express = require('express')
const { currencies, currency } = require( './controller' )

const app = express()
const port = 3000

app.get( '/currencies', currencies)
app.get( '/currencies/:code', currency)

app.listen(port)
console.log(`listening at ${port}`)

module.exports = app;