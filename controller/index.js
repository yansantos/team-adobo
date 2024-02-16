const data = require('../mockData.json');

const currencies = ( req, res ) => {
  res.json( 'currencies endpoint' )
}

const currency = ( req, res ) => {
  const { code } = req.params;
  const currency = data.currencies.find(currency => currency.code === code);
  if ( currency !== undefined ) {
    return res.json(currency, 200);
  }

  return res.status(404).send("Not found currency code");
}

module.exports = { currencies, currency }
