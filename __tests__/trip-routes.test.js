require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Trip = require('../lib/models/Trip');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates a trip', () => {
    return request(app)
      .post('/api/v1/trips')
      .send({
        name: 'maine vacation',
        lat: 44, 
        long: 120
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'maine vacation',
          lat: 44, 
          long: 120,
          __v: 0
        });
      });
  });

  it('gets all trips', async() => {
    const trips = await Trip.create([
      { name: 'maine vacation', lat: 44, long: 120 },
      { name: 'hawaii vacation', lat: 50, long: 200 },
      { name: 'japan vacation', lat: 40, long: 300 }
    ]);
    return request(app)
      .get('/api/v1/trips')
      .then(res => {
        trips.forEach(trip => {
          expect(res.body).toContainEqual({
            _id: trip._id.toString(),
            name: trip.name
          });
        });
      });
  });

  it('gets a trip by id', async() => {
    const trip = await Trip.create({
      name: 'maine vacation',
      lat: 44, 
      long: 120
    });
    return request(app)
      .get(`/api/v1/trips/${trip._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'maine vacation',
          lat: 44, 
          long: 120,
          itineraryItems: [],
          __v: 0
        });
      });
  });

  it('updates a trip by id', async() => {
    const hawaiiTrip = await Trip.create({
      name: 'hawaii vacation',
      lat: 30, 
      long: 200
    });
    return request(app)
      .get(`/api/v1/trips/${hawaiiTrip._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'hawaii vacation',
          lat: 30, 
          long: 200,
          itineraryItems: [],
          __v: 0
        });
      });
  });

  it('deletes a trip by id', async() => {
    const maineTrip = await Trip.create({
      name: 'maine vacation',
      lat: 44, 
      long: 120
    });
    return request(app)
      .delete(`/api/v1/trips/${maineTrip._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'maine vacation',
          lat: 44, 
          long: 120,
          __v: 0
        });
      });
  });

});
