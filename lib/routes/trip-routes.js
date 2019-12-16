const { Router } = require('express');
const Trip = require('../models/Trip');
// const ItineraryItem = require('../models/ItineraryItem');

module.exports = Router()
  .post('/', (req, res) => {
    Trip
      .create(req.body)
      .then(trip => res.send(trip));
  })

  .get('/', (req, res) => {
    Trip
      .find()
      .select({ name: true })
      .then(trips => res.send(trips));
  })

  .get('/:id', (req, res) => {
    Trip
      .findById(req.params.id)
      .populate('itineraryItems')
      .then(trip => res.send(trip.toJSON({ virtuals: true })));
  })

  .patch('/:id', (req, res) => {
    Trip
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(trip => res.send(trip));
  });

  // .delete('/:id', (req, res) => {
  //   Promise.all([
  //     Recipe.findByIdAndDelete(req.params.id),
  //     Event.deleteMany({ recipeId: req.params.id })
  //   ])
  //     .then(([recipe]) => res.send(recipe));
  // });
