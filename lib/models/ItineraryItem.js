const mongoose = require('mongoose');
const getWeather = require('../services/weather');

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

//creating a static method to take the woeid and provide the weather information for the itinerary item 
schema.statics.populateWeather = async function() {
  const currentItemWoeid = this.woeid; 
  return await getWeather(currentItemWoeid);
};

module.exports = mongoose.model('ItineraryItem', schema);
