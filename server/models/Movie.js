const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  genre: String,
  year: Number,
  rating: Number,
});

module.exports = mongoose.model('Movie', MovieSchema);