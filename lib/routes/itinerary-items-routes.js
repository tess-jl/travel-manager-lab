const { Router } = require('express');
// const Trip = require('../models/Trip');
const ItineraryItem = require('../models/ItineraryItem');

module.exports = Router()
  .post('/', (req, res) => {
    ItineraryItem
      .create(req.body)
      .then(trip => res.send(trip));
  })

  .delete('/:id', (req, res) => {
    ItineraryItem
      .findByIdAndDelete(req.params.id)
      .then((item) => res.send(item));
  });
