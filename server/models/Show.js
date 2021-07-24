



const mongoose = require("mongoose");

const { Schema } = mongoose;

const showSchema = new Schema({
  showName: {
    type: String,
    required: true,
    trim: true,
  },
  seasons: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  time: {
    type: Number,
  },
  image: {
    type: String,
  },
});

const Show = mongoose.model('Product', showSchema);

module.exports = { Show };

// _id: ID
// showName: String
// seasons: String
// description: String
// time: Int
// image: String
