<<<<<<< HEAD
const { Schema, model } = require('mongoose');

const showSchema = new Schema({

    showName: [
        {
        type: String,
    },
    ],
    description: {
        type: String,
        required: true,
    },
    // may need a show ID
    
    seasons: {
        type: String,
        require: true,
    },
    image: {
        type:String,
    },
    time: {
        type: String,
        require: true,
    },
    streamingService: {
        type: String,
        require: true
    },
    });


module.exports = showSchema; 


// Show = showSchema 
// showName = showName
// seasons = seasons
// description = descriptions
// time = times 
// whereIsItStreamed = streamingService
// image = image 
=======
const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
>>>>>>> 4f08805d59091be650150619213cb9a1f74d4de4
