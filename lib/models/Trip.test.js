const Trip = require('./Trip');
const mongoose = require('mongoose');

describe('Trip model tests', () => {

  it('has a required name field', () => {
    const event = new Trip();
    const { errors } = event.validateSync();

    expect(errors.name.message).toEqual('Path `name` is required.');
  });

  it('has a required lat field', () => {
    const event = new Trip();
    const { errors } = event.validateSync();

    expect(errors.lat.message).toEqual('Path `lat` is required.');
  });

  it('has a required long field', () => {
    const event = new Trip();
    const { errors } = event.validateSync();

    expect(errors.long.message).toEqual('Path `long` is required.');
  });

  it('has name, lat and long fields and an id added by mongoose', () => {
    const maineTrip = new Trip({
      name: 'maine vacation',
      lat: 44,
      long: 120
    });
    expect(maineTrip.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      name: 'maine vacation',
      lat: 44,
      long: 120
    });
  });
});
