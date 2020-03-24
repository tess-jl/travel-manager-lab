const superagent = require('superagent');

const getWeather = (currentItemWoeid) => {
  return superagent
    .get(`https://www.metaweather.com/api/location/${currentItemWoeid}/`)
    .then(res => {
      const weather = res.consolidated_weather[0].weather_state_name;
      return weather;
    });
};

module.exports = {
  getWeather
};
