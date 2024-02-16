
const currencies = ( req, res ) => {
  res.json( 'currencies endpoint' )
}

const currency = ( req, res ) => {
  res.json( 'currency endpoint' )
}

module.exports = { currencies, currency }
