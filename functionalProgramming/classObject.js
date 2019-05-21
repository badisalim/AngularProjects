class classObject {
    
    constructor(object) {
        this.object = object;
        
    }

    put(property) {
        return this.object[property];
    }

    remove() {

    }

    change() {

    }
    calculate() {

    }


    getTotal() {

    }

    display() {

    }
}

const europe = {
    austria: {
        population: 8773000,
        capital: "Vienna",
        size: 83879
    },
    france: {
        population: 66991000,
        capital: "Paris",
        size: 643801
    },
    germany: {
        population: 82790000,
        capital: "Berlin",
        size: 357386
    },
    italy: {
        population: 60483973,
        capital: "Rome",
        size: 301338
    }
};

const moles = {
    hover: {
        hover1: {
            product1: {
                name: 'Apple',
                code: 2541,
                price: 1.5,
                qty: 2

            },
            product2: {
                name: 'Milch',
                code: 2542,
                price: 1.2,
                qty: 3
            }
        },
        hover2: {
            product1: {
                name: 'Banana',
                code: 2543,
                price: 1.5,
                qty: 2

            },
            product2: {
                name: 'bread',
                code: 2544,
                price: 1.2,
                qty: 3

            },
            product3: {
                name: 'coffee',
                code: 2545,
                price: 3,
                qty: 4
            }
        }
    },
    billa: {
        billa1: {
            product1: {
                name: 'tomato',
                code: 2546,
                price: 0.5,
                qty: 2

            },
            product2: {
                name: 'salad',
                code: 2547,
                price: 0.9,
                qty: 3
            },
            product3: {
                name: 'orange',
                code: 2548,
                price: 1.2,
                qty: 4
            }
        },
        billa2: {
            product1: {
                name: 'juise',
                code: 2549,
                price: 1.5,
                qty: 2

            },
            product2: {
                name: 'chokolate',
                code: 2540,
                price: 2.5,
                qty: 3
            },
        }
    }
}

const name = moles.hover.hover1.product1.name;
const price = moles.hover.hover1.product1.price
const qty = moles.hover.hover1.product1.qty
console.log(name, price*qty);