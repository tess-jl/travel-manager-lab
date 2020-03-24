# Travel Manager Lab

### Node.js, Express, Mongoose/MongoDB, Jest 
___

#### Assignment: "Build an application to help you manage and plan a vacation.

## Requirements

### Models

You're application will have to keep track of a trip. Each trip be attached
to many itinerary items (many-to-one).

### Interaction (routes)

You should be able to create a new trip, get a list of trips, get a single trip,
update a trip, and delete a trip. You should also be able to create and delete
an itinerary item.

### Weather

Fetch the weather from [MetaWeather](https://www.metaweather.com/api/).
You should be able to see the weather forecast for your itinerary items.

**RECOMMENDATION**`

* use middleware to get the woeid based on latitude/longitude and store
  the woeid with your itinerary item
* use a method to get the weather forecast of itinerary items"
