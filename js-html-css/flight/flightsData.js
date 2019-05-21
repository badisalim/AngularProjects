const fs = require("fs"); // https://nodejs.org/api/fs.html

const flights = [
    ["Vienna", 'Frankfort', '7:30am',936],
    ["Munich", 'Bratisla', '8:30pm',948],
    ["Budabest", 'Vienna', '10:30am',958],
    ["Bud", 'Vien', '10:30am',958],
];
function writeToFile(filename, data) {
    return new Promise(resolve => fs.writeFile(filename, data, resolve))
}

writeToFile("flights.json", JSON.stringify(flights));
console.log("file flights has been written");