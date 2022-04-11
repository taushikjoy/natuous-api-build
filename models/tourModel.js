const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: Number,
  price: {
    type: Number,
    required: true,
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
