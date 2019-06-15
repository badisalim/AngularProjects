const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const _ = require('lodash');

async function init() {
  const dbshopFile = './server/dbshop.json';

  let dbshop = await loadData(dbshopFile);

  app
    .use(cors())
    .use(express.json())
    .get('/shop/dbshop', (req, res) => res.send(dbshop))
    .get('/shop/dbshop/:id', (req, res) => {
      const id = parseInt(req.params.id);
      res.send(dbshop.find(product => product.id === id));
    })
    .post('/shop/dbshop', async (req, res) => {
      console.log(req.body);
      
      const product = req.body;
      product.id = getNextId(dbshop);
      dbshop.push(product);
      await saveData(dbshopFile, dbshop).then(() => res.send(dbshop));
    })
    .put('/shop/dbshop', async (req, res) => {
      const product = req.body;
      const existingProduct = dbshop.find(p => p.id === product.id);
      Object.assign(existingProduct, product);
      await saveData(dbshopFile, dbshop).then(() => res.send(dbshop));
    })
    .delete('/shop/dbshop/:id', async (req, res) => {
      const id = parseInt(req.params.id);
      dbshop = dbshop.filter(p => p.id !== id);
      await saveData(dbshopFile, dbshop).then(() => res.send(dbshop));
    })
    .listen(3000, () => console.log('server started on port 3000'));
}

function getNextId(items) {
  return (
    items
    .map(item => item.id)
    .sort((item1, item2) => (item1.id > item2.id ? 1 : -1))
    .pop() + 1
  );
}

async function loadData(filename) {
  return new Promise(resolve =>
    fs.readFile(filename, {
      encoding: 'UTF-8'
    }, (err, data) => resolve(JSON.parse(data).data))
  );
}

async function saveData(filename, data) {
  return new Promise(resolve =>
    fs.writeFile(
      filename,
      JSON.stringify({
        data: data
      }), {
        encoding: 'UTF-8'
      },
      resolve
    )
  );
}

init();
