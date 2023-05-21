const { Router } = require('express');
const router = Router();
const videoGameController = require('../controllers/videoGameController');

router.get('/health', (_, res) => {
  res.send('check');
});

router
  .route('/')
  .get(videoGameController.getAllGames)
  .post(videoGameController.createVideoGame);

router
  .route('/:id')
  .get(videoGameController.getVideoGameById)
  .put(videoGameController.updateVideoGame)
  .delete(videoGameController.deleteVideoGame);

module.exports = router;
