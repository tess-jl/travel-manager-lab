const ItineraryItem = require('./ItineraryItem');

//everything commented out would be necessary to test a virtual 
// const Trip = require('./Trip');

describe('tests for the ItineraryItem model', () => {
  // let maineTrip;
  // // let maineItineraryItem;
  // beforeEach(() => {
  //   maineTrip = new Trip ({
  //     name: 'maine vacation',
  //     lat: 44, 
  //     long: 120
  //   });
  //   // maineItineraryItem = new ItineraryItem({
  //   //   tripId: maineTrip._id,
  //   //   dateOfEvent: new Date('2014-12-12T00:00:00'),
  //   //   notes: 'It went well',
  //   // });
  // });


  it('has a required tripId field', () => {
    const ii = new ItineraryItem(); 
    const { errors } = ii.validateSync();

    expect(errors.tripId.message).toEqual('Path `tripId` is required.');
  });

  it('has a required dateOfEvent field', () => {
    const ii = new ItineraryItem(); 
    const { errors } = ii.validateSync();

    expect(errors.dateOfEvent.message).toEqual('Path `dateOfEvent` is required.');
  });

  it('has a required notes field', () => {
    const ii = new ItineraryItem(); 
    const { errors } = ii.validateSync();

    expect(errors.notes.message).toEqual('Path `notes` is required.');
  });
}); 
