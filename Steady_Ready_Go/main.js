'use strict';

const port = process.env.PORT || 3030,
  express = require('express'),
  app = express(),
  fs = require('fs'),
  Joi = require('joi'),
  path = require('path'),
  databaseModule = require('./modules/databaseCreator.js'),
  routesModule = require('./modules/routes.js'),
  databaseName = 'database',
  objectName = 'videoGames';

app.use(express.json());
databaseModule.createDatabase(databaseName, objectName);
routesModule.readFile(databaseName);

let database = fs.readFileSync(
  path.join(__dirname, `${databaseName}.txt`),
  'utf-8',
  (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
  }
);

const readFile = async () => {
  const filePath = path.join(__dirname, `${databaseName}.txt`);
  const data = await fs.promises.readFile(filePath, 'utf-8');
  const productList = JSON.parse(data);

  app.get('/', (req, res) => {
    res.send('The Database is online...');
  });

  app.get('/api/v1/products', (req, res) => {
    res.send(productList.products);
  });

  app.post('/api/v1/products', (req, res) => {
    const product = req.body;
    productList.videoGames.push(product);
    res.json(productList);
    const stringPro = JSON.stringify(productList);

    const appendFile = async () => {
      const filePath = path.join(__dirname, `${databaseName}.txt`);
      const data = await fs.promises.writeFile(filePath, stringPro);
    };
    console.log('ran it...');
    appendFile();
  });
};

// app.get('/', (req, res) => {
//   res.send('The Database is online...');
// });

// app.get('/api/v1/products', (req, res) => {
//   console.log('Query completed');
//   console.log(databaseJSON);
//   res.send(databaseJSON);
// });

// app.post('/api/v1/products/', (req, res) => {
//   const product = req.body;
//   fs.appendFile(
//     path.join(__dirname, `${databaseName}.txt`),
//     JSON.stringify(product, null, 2),
//     (err) => {
//       if (err) throw err;
//       console.log('Append Completed');
//     }
//   ),
//     fs.appendFile(
//       path.join(__dirname, `${databaseName}.txt`),
//       ',\n\n',
//       (err) => {
//         if (err) throw err;
//         console.log('Append Completed');
//       }
//     ),
//     fs.appendFile(
//       path.join(__dirname, 'testjson.json'),
//       JSON.stringify(product, null, 2),
//       (err) => {
//         if (err) throw err;
//         console.log('Append Completed');
//       }
//     ),
//     fs.appendFile(path.join(__dirname, `testjson.json`), ',\n\n', (err) => {
//       if (err) throw err;
//       console.log('Append Completed');
//     });
//   res.send(database);
// });

// app.get('/api/v1/products/:productId', (req, res) => {
//   const { productId } = req.params;
//   const productIdInt = parseInt(productId);
//   const product = testJson.find((testJson) => testJson.id === productIdInt);
//   res.json(product);
// });

readFile();

app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}`);
});
