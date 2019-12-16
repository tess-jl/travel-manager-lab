const { Router } = require('express');
// const Trip = require('../models/Trip');
const ItineraryItem = require('../models/ItineraryItem');

module.exports = Router()
  // .post('/', (req, res) => {
  //   Trip
  //     .create(req.body)
  //     .then(trip => res.send(trip));
  // })

  // .delete('/:id', (req, res) => {
  //   Promise.all([
  //     Trip.findByIdAndDelete(req.params.id),
  //     ItineraryItem.deleteMany({ tripId: req.params.id })
  //   ])
  //     .then(([trip]) => res.send(trip));
  // });
