const { getWeather } = require('../services/weather');

module.exports = (req, res, next) => {
  getWeather()
    .then(weather => {
      req.weather = weather;
      next();
    });
};
