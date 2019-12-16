const mongoose = require('mongoose');


const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lat: {
    type: Number, 
    required: true
  }, 
  long: {
    type: Number, 
    required: true
  }
});

schema.virtual('intineraryItems', {
  ref: 'ItineraryItem',
  localField: '_id',
  foreignField: 'tripId',
});

module.exports = mongoose.model('Trip', schema);
