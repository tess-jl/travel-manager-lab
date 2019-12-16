require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

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


});
