const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {

  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    callback(error, body[0].description);
  });

};

module.exports = {
  fetchBreedDescription,
};