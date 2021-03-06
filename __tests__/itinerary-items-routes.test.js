require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Trip = require('../lib/models/Trip');
const ItineraryItem = require('../lib/models/ItineraryItem');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  let trip;
  let ii;
  beforeEach(async() => {
    trip = await Trip
      .create({
        name: 'castine vacation',
        lat: 44, 
        long: 120
      });
    ii = await ItineraryItem
      .create({
        tripId: trip._id,
        dateOfEvent: Date.now(),
        notes: 'a good time',
        location: 'Portland', 
        woeid: 1200404
      });
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates an itinerary item', () => {
    return request(app)
      .post('/api/v1/itineraryItems')
      .send({
        tripId: trip._id,
        dateOfEvent: Date.now(), 
        notes: 'good trip', 
        location: 'Portland', 
        woeid: 1200404
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          tripId: trip._id.toString(),
          dateOfEvent: expect.any(String), 
          notes: 'good trip',
          location: 'Portland',
          woeid: expect.any(Number),
          __v: 0
        });
      });
  });


  it('deletes an itinerary item by id', async() => {
    return request(app)
      .delete(`/api/v1/itineraryItems/${ii._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          tripId: JSON.parse(JSON.stringify(trip._id)),
          dateOfEvent: expect.any(String),
          notes: 'a good time',
          location: 'Portland',
          woeid: 1200404,
          __v: 0
        });
      });
  });

});
