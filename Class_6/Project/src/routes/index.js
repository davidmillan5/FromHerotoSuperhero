const { Router } = require('express');
const router = Router();

router
  .use('/v1/products', require('./productRoute'))
  .use('/v1/users', require('./userRoute'))
  .use('/v1/characters', require('./characterRoute'));

module.exports = router;
