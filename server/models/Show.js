const mongoose = require('mongoose');

const { Schema } = mongoose;

const showSchema = new Schema({

showName: {
    type: String,
    required: true,
    trim: true
  },
seasons: {
  type: String,
},
description: {
  type: String,
},
time: { 
  type: Int,
},
image: {
  type: String,
},

});

module.exports = { showSchema }


// _id: ID
// showName: String
// seasons: String
// description: String
// time: Int
// image: String 