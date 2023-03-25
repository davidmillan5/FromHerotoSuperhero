'use strict';

/* npm i node-fetch */
/* lerna -> NPM */

/* https://www.npmjs.com/package/node-fetch */

//const fetch = require('node-fetch');

const fetchApi = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchApiSegments = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    data.results.forEach((key) => console.log(key.id, key.name, key.gender));
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchApi;
//module.exports = fetchApiSegments;

//module.exports = { replaceStr, fetchApiSegments };
