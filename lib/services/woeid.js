const superagent = require('superagent');

const getWoeid = (location) => {
  return superagent
  //to get the woeid
    .get(`https://www.metaweather.com/api/location/search/?query=${location}`)
    .then(res => {
      const [{ woeid }] = res.body;
      return woeid;
    });
};

module.exports = {
  getWoeid
};
