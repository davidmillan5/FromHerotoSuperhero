const { Router } = require('express');
const router = Router();

router
  .use('/v1/products', require('./router'))
  .use('/v1/users', require('./userRoute'));

module.exports = router;
