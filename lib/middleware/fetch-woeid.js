const { getWoeid } = require('../services/woeid');

module.exports = (req, res, next) => {
  const location = req.body.location;
  try {
    getWoeid(location) //returns the woeid
      .then(woeid => {
      //use the woeid as something living on the request
        req.woeid = woeid;
        next();
      });
  }
  catch(err) {
    err.status = 400;
    next(err);
  }
};
