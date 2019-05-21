const fs = require('fs')
const groupArray = require('group-array');
fs.readFile('Array1.json', (err, content) => {
    const Array1 = JSON.parse(content)


    Array1.forEach(e => console.log(e))
    Array1.forEach(e => console.log(e.value1 * e.value2))

    const task = Object.values(Array1);
    const formula = (acc, curr) =>
        (acc + ((curr.value1 * curr.value2)));

    const total = task.reduce(formula, 0);
    console.log(total);
    console.log(task);

console.log(groupArray(Array1,'time','location','value1','value2'));


});