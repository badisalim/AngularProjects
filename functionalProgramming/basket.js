class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const apple = new Product("apple", 3);
console.log(apple.price);

class Basket {
    constructor() {
        this.total = 0;
    }
    put(qty, product) {
        this.total += qty * product.price;
        console.log(this.total);

    }

    getTotal() {

        return this.total;
    }

}

const basket = new Basket();
basket.put(2, apple);
const orange = new Product("orange", 3)
basket.put(3, orange);
console.log(basket.getTotal());