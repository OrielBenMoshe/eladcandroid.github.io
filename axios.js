// const axios = require("axios");
const img = document.querySelector(".cat");
// Make a request for a user with a given ID
axios
  .get("https://api.thecatapi.com/v1/images/search")
  .then(function (response) {
    // handle success
    console.log(response.data[0].url);

    img.src = response.data[0].url;
    console.log(img);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
