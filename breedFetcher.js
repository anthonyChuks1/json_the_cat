const needle = require('needle');


const input = process.argv.splice(2);



needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
  //Handle invalid search request
  

  if (error) {
    console.log('There seem to be a problem with the URL, Please check the URL or try a valid one.');
  } else if (!body[0]) {
    console.log('Breed not found.');
    return;
  } else {
    console.log(body[0].name, ':');
    console.log(body[0].description);
  }
});