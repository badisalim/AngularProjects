const fs = require("fs"); // https://nodejs.org/api/fs.html

const billaCo = {
  BillaCo: {
    billa1: {
      codeNo: 8773001,
      productName: "Milk",
      price: 1.49,
      vat: 0.10,
      qty: 100,
      codeNo: 8773011,
      productName: "orange",
      price: 1.5,
      vat: 0.15,
      qty: 175
    },
    billa2: {
      codeNo: 8773002,
      productName: "Apple",
      price: 2,
      vat: 0.15,
      qty: 150
    },
    billa3: {
      codeNo: 8773003,
      productName: "coffee",
      price: 6.5,
      vat: 0.20,
      qty: 200

    }
  }
}

fs.writeFile("billa.json", JSON.stringify(billaCo), () =>
  console.log("file billa has been written")
);


fs.readFile("billa.json", (err, content) => {
  const {
    BillaCo
  } = JSON.parse(content);
  console.log(Object.keys(BillaCo));
  console.log(Object.values(BillaCo));
  console.log(Object.entries(BillaCo));
  console.log(BillaCo.billa1.codeNo);
});

var items = new Array(); //create array to store items

// Each item in the array will store an object with 2 properties
// Object literal syntax: {propertyName : propertyValue, propertyName : propertyValue, etc.}
items[0] = {
  prop1: "Greatest Hits CD",
  prop2: 10
};
items[1] = {
  prop1: "Girls CD",
  prop2: 10
};
items[2] = {
  prop1: "Shirt1",
  prop2: 20
};
items[3] = {
  prop1: "Mask Tee",
  prop2: 20
};
items[4] = {
  prop1: "Crewneck",
  prop2: 25
};
items[5] = {
  prop1: "Tour Poster",
  prop2: 10
};

var sum = null; // Place to store the total cost

// The JavaScript Array.prototype specifies a built-in method called
// forEach that takes a function as an argument. That function is
// automatically passed 3 arguments and is executed for each element 
// in the array.
items.forEach(function (value, index, arry) {
  sum += value.prop2;
});

console.log(sum);




let products = [{
    name: "chair",
    inventory: 5,
    unit_price: 45.99
  },
  {
    name: "table",
    inventory: 10,
    unit_price: 123.75
  },
  {
    name: "sofa",
    inventory: 2,
    unit_price: 399.50
  }
];

function listProducts(prods) {
  let product_names = [];
  for (let i = 0; i < prods.length; i += 1) {
    product_names.push(prods[i].name);
  }
  return product_names;
}
console.log(listProducts(products));

function totalValue(prods) {
  let inventory_value = 0;
  for (let i = 0; i < prods.length; i += 1) {
    inventory_value += prods[i].inventory * prods[i].unit_price;
  }
  return inventory_value;
}
console.log(totalValue(products));