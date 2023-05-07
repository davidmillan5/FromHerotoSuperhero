const express = require('express'),
  router = express.Router(),
  { Product } = require('../controllers');

router.get('/health', (_, res) => {
  res.send('check');
});

router.route('/').get(Product.getAllProducts).post(Product.createProduct);

router
  .route(`/:id`)
  .get(Product.getProductById)
  .put(Product.updateProduct)
  .delete(Product.deleteProduct);

module.exports = router;
