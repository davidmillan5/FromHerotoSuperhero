const express = require('express'),
  controller = require('../controllers/productControllers'),
  router = express.Router(),
  BASE = '/api/v1/products';

router.get('/health', (_, res) => {
  res.send('check');
});

router
  .route(BASE)
  .get(controller.getAllProducts)
  .post(controller.createProduct);

module.exports = router;
