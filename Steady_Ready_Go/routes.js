const { Router } = require('express');
const express = require('express');

const routes = new Router();

//Health check
routes.get('/health', (_, res) => {
  res.send('check');
});

const BASE = '/api/v1/products';

// routes.get(BASE,[productValidatorJoi] ,async (req,res)=>{

// })

routes.get(BASE, async (_, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = routes;
