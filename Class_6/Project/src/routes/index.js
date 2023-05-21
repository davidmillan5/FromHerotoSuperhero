const { Router } = require('express');
const router = Router();

router
  .use('/v1/products', require('./productRoute'))
  .use('/v1/users', require('./userRoute'))
  .use('/v1/characters', require('./characterRoute'))
  .use('/v1/videogames', require('./videoGamesRoute'));

module.exports = router;
