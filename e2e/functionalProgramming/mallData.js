 const fs = require("fs"); // https://nodejs.org/api/fs.html

 const mall = {
     hover: {
         hover1: {
             product1: {
                 product: 'Apple',
                 amount: 2,
                 price: 1.5,
                 code: 2541,

             },
             Milch: {
                 product: 'Milch',
                 amount: 3,
                 price: 1.2,
                 code: 2542,
             },
             product3: {
                product: 'Apple',
                amount: 2,
                price: 1.5,
                code: 2541,

            },
         },
         hover2: {
             product1: {
                 product: 'Banana',
                 amount: 2,
                 price: 1.5,
                 code: 2543,
             },
             product2: {
                 product: 'Apple',
                 amount: 3,
                 price: 1.2,
                 code: 2544,
             },
             product3: {
                 product: 'coffee',
                 amount: 4,
                 price: 3,
                 code: 2545,
             }
         }
     },
     billa: {
         billa1: {
             product1: {
                 product: 'tomato',
                 amount: 2,
                 price: 0.5,
                 code: 2546,
             },
             product2: {
                 product: 'Apple',
                 amount: 3,
                 price: 0.9,
                 code: 2547,
             },
             product3: {
                 product: 'orange',
                 amount: 4,
                 price: 1.2,
                 code: 2548,
             }
         },
         billa2: {
             product1: {
                 product: 'juise',
                 amount: 2,
                 price: 1.5,
                 code: 2549,
             },
             product3: {
                product: 'Apple',
                amount: 2,
                price: 1.5,
                code: 2541,

            },
             product2: {
                 product: 'chokolate',
                 amount: 3,
                 price: 2.5,
                 code: 2540,
             },
         }

     }
 }

 function writeToFile(filename, data) {
     return new Promise(resolve => fs.writeFile(filename, data, resolve))
 }

 writeToFile("mall.json", JSON.stringify(mall));
 console.log("file mall has been written");