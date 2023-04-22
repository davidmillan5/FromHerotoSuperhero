const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: false },
  availableUnits: { type: Number, require: false, default: 0 },
  price: { type: Number, require: false },
  category: { type: String, require: false },
});

exports.Product = mongoose.model('Products', ProductSchema);
