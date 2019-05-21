const vienna = {
    population: 1868000,
    size: 414.87
};
const array1 = [1, 2, 3, 4]
const array2 = [5, [6],
    [
        [7, 8]
    ]
]

const reducer = (accumulater, currentValue) => (accumulater + ((currentValue * currentValue)));
console.log(array1.reduce(reducer));
//(accumulator + ((currentValue.price * currentValue.amount)));
console.log(array1.reduce(reducer, 9));

console.log(array1.sort((a, b) => a - b));
console.log(array1.sort((a, b) => a + b));

const combine1 = [...[array1].concat(...[array2])];
console.log(combine1)

//const combine2 = Array.prototype.concat(...combine1);
//const combine3 = Array.prototype.concat(...combine2);
//console.log(combine3);

const flatten = function flatten(list) {
    const f = list.reduce(function (a, b) {
        return a.concat(Array.isArray(b) ? flatten(b) : b);
    }, []);
    return f
};
console.log(flatten(combine1))

const _ = require("lodash");
_.toPairs(vienna).sort(); //sort((a,b)=>b[1] - a[1]);
console.log(_.toPairs(vienna).sort());