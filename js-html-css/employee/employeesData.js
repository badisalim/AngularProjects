const fs = require("fs"); // https://nodejs.org/api/fs.html

const employees = [

    ["Section1" ,[["Badi", "Raslan",  "7 - 04 - 1967",  2000],
                 ["Adeeb", "Zidan",  '7 - 04 - 1995',  2500]],
    ],
    ['Section2', [['Aishana', 'Aishan', '7 - 04 - 1985', 3000]]],

]

const writeToFile = (filename, data) => {

    return new Promise(resolve => fs.writeFile(filename, data, resolve))
}

writeToFile("employees.json", JSON.stringify(employees));

console.log("file employees has been written");