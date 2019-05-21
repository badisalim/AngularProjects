class BasketAsync {
    constructor() {
        this.products = [];
    }
    put(products, callback) {
        setTimeout(() => {
            this.products.push(products);
            callback();
        }, 1000);
    }
}
const basket = new BasketAsync();
basket.put("apple", () => {
    basket.put("orange", () => {
        console.log(basket.products);
    });
    console.log(basket.products);
});

// class BasketAsync {
//     constructor() {
//         this.products = [];
//     }
//     put(products, callback) {
//         setTimeout(() => {
//             this.products.push(products);
//             callback();
//         }, 1000);
//     }
//     get(callback) {
//         setTimeout(() => callback(this.products), 1000);
//     }
// }
// const basket = new BasketAsync();
// basket.put("apple", ()=> {
//             basket.put("orange", ()=> {
//                 basket.get((products) =>{
//                     console.log(products);
//                 });
//             });
//         });