const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const _ = require('lodash');

async function init() {
  const invoiceFile = './server/invoice.json';

  let invoice = await loadData(invoiceFile);

  app
    .use(cors())
    .use(express.json())
    .get('/shop/invoice', (req, res) => res.send(invoice))
    .get('/shop/invoice/:code', (req, res) => {
      const code = parseInt(req.params.code);
      res.send(invoice.find(product => product.code === code));
    })
    .post('/shop/invoice', async (req, res) => {
      console.log(req.body);
      
      const product = req.body;
      product.code = getNextcode(invoice);
      invoice.push(product);
      await saveData(invoiceFile, invoice).then(() => res.send(invoice));
    })
    .put('/shop/invoice', async (req, res) => {
      const product = req.body;
      const existingProduct = invoice.find(p => p.code === product.code);
      Object.assign(existingProduct, product);
      await saveData(invoiceFile, invoice).then(() => res.send(invoice));
    })
    // .edit('/shop/invoice/:code', async (req, res) => {
    //   const code = parseInt(req.params.code);
    //   invoice = invoice.filter(p => p.code !== code);
    //   await saveData(invoiceFile, invoice).then(() => res.send(invoice));
    // })

    .delete('/shop/invoice/:code', async (req, res) => {
      const code = parseInt(req.params.code);
      invoice = invoice.filter(p => p.code !== code);
      await saveData(invoiceFile, invoice).then(() => res.send(invoice));
    })
    .listen(4000, () => console.log('server started on port 3000'));
}

function getNextcode(items) {
  return (
    items
    .map(item => item.code)
    .sort((item1, item2) => (item1.code > item2.code ? 1 : -1))
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
