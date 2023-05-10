const { Router } = require('express');
const router = Router();
const characterController = require('../controllers/characterControllers');

router.get('/health', (_, res) => {
  res.send('check');
});

router
  .route('/')
  .get(characterController.getAllCharacters)
  .post(characterController.createCharacter);

router
  .route(`/:id`)
  .get(characterController.getCharacterById)
  .delete(characterController.deleteById);

module.exports = router;
