const mongoose = require('mongoose');

const { Schema } = mongoose;

const showSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  overview: {
    type: String,
    required: true
  }
  
});

const Show = mongoose.model('Show', showSchema);

module.exports = Show;

