const fs = require("fs")

fs.readFile("employees.json", (err, content) => {

    const sections = JSON.parse(content);
    console.log('------------------');

    sections.forEach(section => {
        [sectionName, employees] = section;
        //console.log(section);
       // console.log(employees);

        // const arrvalues = employees.values()
        // for (let value of arrvalues) {
        //     console.log(value);
        // }

        employees.forEach((employee, i) => {

            [firstName, lastName, bierthday, salary] = employee


            console.log(`${i + 1}.${sectionName}- firstName  :${firstName}- lastName  :${lastName}- bierthday :${bierthday}- salary  :${salary} `);



        });

    });

})










// const fs = require("fs")

// fs.readFile("employees.json", (err, content) => {

//     const employees = JSON.parse(content);
//     console.log(employees);
//     console.log('------------------');
//     employees.forEach(function (employee, i) {

//         [section, firstName, lastName,bierthday, salary] = employee

//         console.log(`${i + 1}-section : ${section}- firstName  :${firstName}- lastName  :${lastName}- bierthday :${bierthday}- salary  :${salary} `);
//     });

//     console.log(employees);
// })