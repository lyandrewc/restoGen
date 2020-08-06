const BASE_URL = 'https://api.yelp.com';
const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
axios
  .get(
    `${CORS_URL}${BASE_URL}/v3/businesses/search?&location=Calgary`,
    {
      headers: {
        Authorization:
          'Bearer 7l8I-riw2Ckhc5ZgJroMljAJ2DklCmjp9f0BvTNPGu3g5MLn_ak0Ozxm3-a0xM9cnRWeoD8pPlAOvbGxfwF-Ld-lx2He83FHL-bV2pRiTeXt0-FJ-iVn3cdfiVOVXXYx'
      }
    }
  )
  .then(response => {
    // handle success
    console.log(response.data);
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
  .finally(() => {
    // always executed
  });
axios.post(
  `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?`,
  {}
);

const button = document.getElementById('find');
button.addEventListener('click', () => {
  alert('Clicked');
});

/*async function getResults(query) {
  const key =
    '7l8I-riw2Ckhc5ZgJroMljAJ2DklCmjp9f0BvTNPGu3g5MLn_ak0Ozxm3-a0xM9cnRWeoD8pPlAOvbGxfwF-Ld-lx2He83FHL-bV2pRiTeXt0-FJ-iVn3cdfiVOVXXYx';
  axios
    .get(`https://api.yelp.com/v3/businesses/search?=${key}&term=${food}`, {
      params: {
        location: 'Calgary',
        categories: 'french'
      }
    })
    .then(function(response) {
      // handle success
      console.log(response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });
}
*/

// location, categories, term

/*import axios from 'axios';
import express from 'express';
import yelp from 'yelp-fusion';

const CORSurl = 'https://cors-anywhere.herokuapp.com/';
const yelpURL = 'https://api.yelp.com/v3/businesses/search';

const req = new Request(yelpURL, {
  method: 'GET',
  headers: new Headers({
    'Authorization': 'Bearer 7l8I-riw2Ckhc5ZgJroMljAJ2DklCmjp9f0BvTNPGu3g5MLn_ak0Ozxm3-a0xM9cnRWeoD8pPlAOvbGxfwF-Ld-lx2He83FHL-bV2pRiTeXt0-FJ-iVn3cdfiVOVXXYx',
  })
})
*/
/* const radioCheckbox = document.querySelector('input[type="radio"]');
radioCheckbox.addEventListener('click', () => {});
*/

/* const key =
  '7l8I-riw2Ckhc5ZgJroMljAJ2DklCmjp9f0BvTNPGu3g5MLn_ak0Ozxm3-a0xM9cnRWeoD8pPlAOvbGxfwF-Ld-lx2He83FHL-bV2pRiTeXt0-FJ-iVn3cdfiVOVXXYx';

const searchRequest = {
  term: 'Four Barrel Coffee',
  location: 'san francisco, ca'
};

*/

// const radios = document.getElementsByClassName('field').checked = false;

/* ('use strict');

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey =
  '7l8I-riw2Ckhc5ZgJroMljAJ2DklCmjp9f0BvTNPGu3g5MLn_ak0Ozxm3-a0xM9cnRWeoD8pPlAOvbGxfwF-Ld-lx2He83FHL-bV2pRiTeXt0-FJ-iVn3cdfiVOVXXYx';

const searchRequest = {
  term: 'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client
  .search(searchRequest)
  .then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
  })
  .catch(e => {
    console.log(e);
  });
  */

// import axios from 'axios';
// eslint-disable-next-line no-unused-vars
/* const CORSurl = 'https://cors-anywhere.herokuapp.com/';

fetch('https://api.yelp.com/v3/businesses/search', {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer 7l8I-riw2Ckhc5ZgJroMljAJ2DklCmjp9f0BvTNPGu3g5MLn_ak0Ozxm3-a0xM9cnRWeoD8pPlAOvbGxfwF-Ld-lx2He83FHL-bV2pRiTeXt0-FJ-iVn3cdfiVOVXXYx'
    // eslint-disable-next-line comma-dangle
  }
})
  .then(response => {
    // handle success
    console.log(response);
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
  .finally(() => {
    // always executed
  });

/* const radioCheckbox = document.querySelector('input[type="radio"]') {
radioCheckbox.classList.toggle('')
};
*/
