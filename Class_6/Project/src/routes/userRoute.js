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

router
  .route(`/:id`)
  .get(userController.getUserById)
  .delete(userController.deleteById);

module.exports = router;
