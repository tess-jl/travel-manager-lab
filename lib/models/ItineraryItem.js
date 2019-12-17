const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip',
    required: true
  },
  dateOfEvent: {
    type: Date,
    required: true
  },
  notes: {
    type: String,
    required: true
  }, 
  location: {
    type: String, 
    required: true
  }, 
  //middleware adds this field always
  woeid: {
    type: Number, 
    required: true
  }
});

module.exports = mongoose.model('ItineraryItem', schema);
