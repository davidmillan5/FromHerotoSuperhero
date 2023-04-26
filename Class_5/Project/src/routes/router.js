const express = require('express'),
  router = express.Router(),
  BASE = '/api/v1/products',
  productController = require('../controllers/productControllers');

router.get('/health', (_, res) => {
  res.send('check');
});

router
  .route(BASE)
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route(`${BASE}/:id`)
  .get(productController.getProductById)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
