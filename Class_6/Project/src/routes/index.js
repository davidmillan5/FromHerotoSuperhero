const { Router } = require('express');
const router = Router();
const { login, restrictedView } = require('../controllers/authController');
const { isAuth } = require('../middleware/handlers');

router
  .post('/login', login)
  .get('/auth/confidential', isAuth, restrictedView)
  .use('/v1/products', require('./productRoute'))
  .use('/v1/users', require('./userRoute'))
  .use('/v1/characters', require('./characterRoute'))
  .use('/v1/videogames', require('./videoGamesRoute'));

module.exports = router;
