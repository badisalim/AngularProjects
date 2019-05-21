const fs = require('fs');
const Array1 = [{
        time: '12:00',
        location: 'mall',
        value1: 5,
        value2: 2
    },
    {
        time: '9:00',
        location: 'store',
        value1: 5,
        value2: 3
    },
    {
        time: '9:00',
        location: 'mall',
        value1: 5,
        value2: 4
    },
    {
        time: '12:00',
        location: 'store',
        value1: 5,
        value2: 5
    },
    {
        time: '12:00',
        location: 'market',
        value1: 5,
        value2: 6
    },
];

const Array2 = [{
        Phase: "Phase 1",
        Step: "Step 1",
        Task: "Task 1",
        Value: 5,

    },

    {
        Phase: "Phase 1",
        Step: "Step 1",
        Task: "Task 2",
        Value: 10,

    },
    {
        Phase: "Phase 1",
        Step: "Step 2",
        time: '15:00',

    },
    {
        Phase: "Phase 1",
        Step: "Step 2",
        time: '17:00',

    },
    {
        Phase: "Phase 2",
        Step: "Step 1",
        Task: "Task 1",
        Value: 25,
        time: '9:00',
        location: 'mall'
    },
    {
        Phase: "Phase 2",
        Step: "Step 1",
        Task: "Task 2",
        Value: 30,
        time: '12:00',
        location: 'market'
    },
    {
        Phase: "Phase 2",
        Step: "Step 2",
        Task: "Task 1",
        Value: 35,
        time: '15:00',
        location: 'mall'
    },
    {
        Phase: "Phase 2",
        Step: "Step 2",
        Task: "Task 2",
        Value: 40,
        time: '17:00',
        location: 'market'
    }
];

var Array3 = [{
        tag: 'one',
        content: 'A'
    },
    {
        tag: 'one',
        content: 'B'
    },
    {
        tag: 'two',
        content: 'C'
    },
    {
        tag: 'two',
        content: 'D'
    },
    {
        tag: 'three',
        content: 'E'
    },
    {
        tag: 'three',
        content: 'F'
    }
];

var Array4 = [{
        data: {
            year: '2016',
            tag: 'one',
            month: 'jan',
            day: '01'
        },
        content: '...'
    },
    {
        data: {
            year: '2016',
            tag: 'one',
            month: 'jan',
            day: '01'
        },
        content: '...task will be provide'
    },
    {
        data: {
            year: '2016',
            tag: 'one',
            month: 'jan',
            day: '02',
        },
        content: '...'
    },
    {
        data: {
            year: '2016',
            tag: 'one',
            month: 'jan',
            day: '02'
        },
        content: '...'
    },
    {
        data: {
            year: '2016',
            tag: 'one',
            month: 'feb',
            day: '10'
        },
        content: '...'
    },
    {
        data: {
            year: '2016',
            tag: 'one',
            month: 'feb',
            day: '10'
        },
        content: '...'
    },
    {
        data: {
            year: '2016',
            tag: 'one',
            month: 'feb',
            day: '12'
        },
        content: '...'
    },
    {
        data: {
            year: '2016',
            tag: 'one',
            month: 'feb',
            day: '12'
        },
        content: '...'
    },
    {
        data: {
            year: '2016',
            tag: 'two',
            month: 'jan',
            day: '14'
        },
        content: '...'
    },
    {
        data: {
            year: '2016',
            tag: 'two',
            month: 'jan',
            day: '14'
        },
        content: '...'
    },
    {
        data: {
            year: '2016',
            tag: 'two',
            month: 'jan',
            day: '16'
        },
        content: '...'
    },
    {
        data: {
            year: '2016',
            tag: 'two',
            month: 'jan',
            day: '16'
        },
        content: '...'
    },
    {
        data: {
            year: '2016',
            tag: 'two',
            month: 'feb',
            day: '18'
        },
        content: '...'
    },
    {
        data: {
            year: '2017',
            tag: 'two',
            month: 'feb',
            day: '18'
        },
        content: '...'
    },
    {
        data: {
            year: '2017',
            tag: 'two',
            month: 'feb',
            day: '10'
        },
        content: '...'
    },
    {
        data: {
            year: '2017',
            tag: 'two',
            month: 'feb',
            day: '10'
        },
        content: '...'
    },
    {
        data: {
            year: '2017',
            tag: 'three',
            month: 'jan',
            day: '01'
        },
        content: '...'
    },
    {
        data: {
            year: '2017',
            tag: 'three',
            month: 'jan',
            day: '01'
        },
        content: '...'
    },
    {
        data: {
            year: '2017',
            tag: 'three',
            month: 'jan',
            day: '02'
        },
        content: '...'
    },
    {
        data: {
            year: '2017',
            tag: 'three',
            month: 'jan',
            day: '02'
        },
        content: '...'
    },
    {
        data: {
            year: '2017',
            tag: 'three',
            month: 'feb',
            day: '01'
        },
        content: '...'
    },
    {
        data: {
            year: '2017',
            tag: 'three',
            month: 'feb',
            day: '01'
        },
        content: '...'
    },
    {
        data: {
            year: '2017',
            tag: 'three',
            month: 'feb',
            day: '02'
        },
        content: '...'
    },
    {
        data: {
            year: '2017',
            tag: 'three',
            month: 'feb',
            day: '02'
        },
        content: '...'
    }
];



function writeToFile(filename, data) {
    return new Promise(resolve => fs.writeFile(filename, data, resolve))
}

writeToFile("Array1.json", JSON.stringify(Array1));
writeToFile("Array2.json", JSON.stringify(Array2));
writeToFile("Array3.json", JSON.stringify(Array3));
writeToFile("Array4.json", JSON.stringify(Array4));
console.log("file Array1 has been written");
console.log("file Array2 has been written");
console.log("file Array3 has been written");
console.log("file Array4 has been written");