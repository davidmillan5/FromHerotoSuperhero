'use strict';

//const { FetchError } = require('node-fetch');
// // https://www.npmjs.com/package/nodemon
// // npm i -g nodemon

// let obj = {
//   name: 'David',
//   age: 34,
// };

// console.table(obj);

// // Como eliminar un paquete

// /*

// npm uninstall package_name3

// */

// const isOdd = require('is-odd-num');

// console.log(isOdd(3));

// /* gitignore.io is used to create a gitignore */
// /*

// https://mrkandreev.name/snippets/gitignore-generator/

// https://www.toptal.com/developers/gitignore

// */

// // console.log(global);

// const fs = require('fs');

// const path = require('path');

// const readFile = async () => {
//   try {
//     const filePath = path.resolve(`${__dirname}/archive.txt`);
//     const data = await fs.promises.readFile(filePath, 'ascii');
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// readFile();

// /*What is web Scraping? */

// const writeFile = async (content) => {
//   try {
//     const filePath = path.resolve(`${__dirname}/newArchive.txt`);
//     await fs.promises.writeFile(filePath, content);
//   } catch (error) {
//     console.log(error);
//   }
// };

// writeFile('Nice Job!');

// const appendFile = async (content) => {
//   try {
//     const filePath = path.resolve(`${__dirname}/newArchive.txt`);
//     await fs.promises.appendFile(filePath, content);
//   } catch (error) {
//     console.log(error);
//   }
// };

// appendFile('\nSecond Line');

const fetchApi = require('../utils/api.js');
const fetchApiSegments = require('../utils/api.js');

const charactersUrl = 'https://rickandmortyapi.com/api/character/';
const locationsUrl = 'https://rickandmortyapi.com/api/location/';
const episodesUrl = 'https://rickandmortyapi.com/api/episode/';

fetchApi(charactersUrl);
//fetchApiSegments(charactersUrl);
//Deconstruct an API object
