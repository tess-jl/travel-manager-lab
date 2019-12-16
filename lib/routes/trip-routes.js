const { Router } = require('express');
const Trip = require('../models/Trip');
// const ItineraryItem = require('../models/ItineraryItem');

module.exports = Router()
  .post('/', (req, res) => {
    Trip
      .create(req.body)
      .then(recipe => res.send(recipe));
  })

  .get('/', (req, res) => {
    Trip
      .find()
      .select({ name: true })
      .then(recipes => res.send(recipes));
  });

  // .get('/:id', (req, res) => {
  //   Recipe
  //     .findById(req.params.id)
  //     .populate('events')
  //     .then(recipe => res.send(recipe.toJSON({ virtuals: true })));
  // })

  // .patch('/:id', (req, res) => {
  //   Recipe
  //     .findByIdAndUpdate(req.params.id, req.body, { new: true })
  //     .then(recipe => res.send(recipe));
  // })

  // .delete('/:id', (req, res) => {
  //   Promise.all([
  //     Recipe.findByIdAndDelete(req.params.id),
  //     Event.deleteMany({ recipeId: req.params.id })
  //   ])
  //     .then(([recipe]) => res.send(recipe));
  // });
