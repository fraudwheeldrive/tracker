

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


// // Show = showSchema 
// // showName = showName
// // seasons = seasons
// // description = descriptions
// // time = times 
// // whereIsItStreamed = streamingService




