const fs = require("fs"); // https://nodejs.org/api/fs.html

const {
    calculateBasket
} = require("./calculateBasket");

fs.readFile("mall.json", (err, content) => {

    const mall = JSON.parse(content);
    console.log(Object.keys(mall));
    console.log(`mall------------------+${mall}`);



    mall.billa.billa1.Apple = { //add
        product: "Apple",
        amount: 5,
        price: 3
    }

    console.log(mall.billa);
    console.log('------------------');

    Object.entries(delete mall.billa.billa1.product3); //delete
    console.log(mall.billa);
    console.log('-----------------');

    console.log('total sales for hover1 and hover2 branches :');
    const hover1 = calculateBasket((mall.hover.hover1));
    const hover2 = calculateBasket((mall.hover.hover2));
    console.log('total sales for billa1 and billa2 branches :');
    const billa1 = calculateBasket((mall.billa.billa1));
    const billa2 = calculateBasket((mall.billa.billa2));
    const total = hover1 + hover2 + billa1 + billa2
    console.log(`Total sales for all mall branches :\n ${total}`);
    console.log(mall.billa.billa1.Apple)

    const calculateTotalForApple = () => {

        const applePurchases = [];
        for (const shopName in mall) {
            const shopValue = mall[shopName]
            for (const basketName in shopValue) {
                const basketValue = shopValue[basketName];
                for (const productName in basketValue) {
                    const productValue = basketValue[productName];

                    if (productValue.product === "Apple") {
                        applePurchases.push(productValue);
                        console.log(productValue);
                    }
                }  console.log(`total sales for all Apple products in :${shopName} `);

            }
          
            const total = calculateBasket(applePurchases)

        }
    }
    calculateTotalForApple();
});