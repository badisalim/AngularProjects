const fs = require("fs"); // https://nodejs.org/api/fs.html

const {
    calculateBasket
} = require("../../functionalProgramming/calculateBasket");

fs.readFile("mall.json", (err, content) => {

    const mall = JSON.parse(content);
    console.log((mall.hover));
    console.log('------------------');
    console.log(mall.billa);
const mall1=Object.values(mall)
console.log('mall1-------');
console.log(mall1);


    // const {
    //     hover
    // } = JSON.parse(content);
    // console.log((hover));
    // const {
    //     billa
    // } = JSON.parse(content);
    // console.log((billa));

    const addProduct = (product) => {
        mall.billa.billa1.Apple = { //add with same name or other name
            product: "AppleAdd",
            amount: 5,
            price: 3
        }
        console.log('Add product------------------');
        console.log(mall.billa);
        return product;

    }
    addProduct();

    const deleteProduct = (product) => {
        Object.entries(delete mall.billa.billa1.product3); //delete
        return product;
    }
    deleteProduct();
    console.log('Remove Product------------------');
    console.log(mall.billa);


    console.log('------------------');
    console.log('total sales for hover1 and hover2 branches :');
    const totalSalesForHover = () => {

        const hover1 = calculateBasket((mall.hover.hover1));
        const hover2 = calculateBasket((mall.hover.hover2));
        const total = hover1 + hover2;
        const roundedTotal=Math.round(total)
        console.log("Hover sales: " + roundedTotal)
        return total;
    }

    totalSalesForHover()
    console.log('------------------');
    console.log('total sales for billa1 and billa2 branches :');
    const totalSalesForBilla = () => {
        const billa1 = calculateBasket((mall.billa.billa1));
        const billa2 = calculateBasket((mall.billa.billa2));
        console.log('Billa Sales = ' + (billa1 + billa2));
        return billa1 + billa2;
    }
    totalSalesForBilla()
    console.log('------------------');
    console.log('Total sales for all mall branches :');
    const totalSalesForAllBranches = (fn1, fn2) => {
        console.log(fn1 + fn2)
        return fn1 + fn2;
    }
   
    totalSalesForAllBranches(totalSalesForHover(), totalSalesForBilla())
 console.log('------------------');

    const calculateTotalForApple = () => {

    }

    for (const shopName in mall) {
        const shopValue = mall[shopName]

        for (const basketName in shopValue) {
            const applePurchases = [];
            const basketValue = shopValue[basketName];
            for (const productName in basketValue) {
                const productValue = basketValue[productName];
                if (productValue.product === "Apple") {
                    applePurchases.push(productValue);
                    console.log(productValue);
                    console.log(basketName);
                    
                    
                } 
                
            }
            console.log(`total sales for all Apple products in ${shopName},branch-----${basketName} `);
           
            
            const total = calculateBasket(applePurchases)
            
            
            // const total = applePurchases
            //     .map(product => product.amount * product.price)
            //     .reduce((a, b) => a + b, 0);
console.log('------------------');
        }
        
    };
  
    calculateTotalForApple();
});  