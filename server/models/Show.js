const mongoose = require('mongoose');

const { Schema } = mongoose;

<<<<<<< HEAD
const orderSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  purchaseDate: {
    type: Date,
    default: Date.now
=======
const showSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
>>>>>>> d61c3137ebf18141480a483dcd8e8cc771248bcc
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

