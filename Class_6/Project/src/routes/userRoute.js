const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController');


router.get('/health', (_, res) => {
  res.send('check');
});

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

module.exports = router;
