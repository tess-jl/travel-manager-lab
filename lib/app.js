const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/trips', require('./routes/trip-routes'));

// app.use('/api/v1/itineraryItems', require('./routes/itinerary-items-routes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
