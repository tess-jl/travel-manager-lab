const { Router } = require('express');
// const Trip = require('../models/Trip');
const ItineraryItem = require('../models/ItineraryItem');

//import method for getWeather
const fetchedWoeid = require('../middleware/fetch-woeid');

module.exports = Router()
  .post('/', fetchedWoeid, (req, res) => {
    ItineraryItem
      .create({ ...req.body, woeid: req.woeid })
      .then(trip => res.send(trip));
  })

  .delete('/:id', (req, res) => {
    ItineraryItem
      .findByIdAndDelete(req.params.id)
      .then((item) => res.send(item));
  });
