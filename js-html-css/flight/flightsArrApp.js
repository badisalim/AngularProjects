const fs = require("fs"); // https://nodejs.org/api/fs.html

fs.readFile("flights.json", (err, content) => {

    const flights = JSON.parse(content);
    console.log(flights);
    console.log('------------------');


    flights.forEach(function (flight, i) {

        [fromCity, toCity, Time, flightNo] = flight
        //removed middle element
       // flights.shift(0); 
        //remove last element
        //flights.pop();
    
        console.log(`${i + 1}.A flight from ${fromCity} to ${toCity} at${Time} flightNo ${flightNo} `);
});
     const flights2 = flights.splice(0, 2)
    // // Starting at index position 0, remove two elements
     console.log(flights);
    // // Starting at index position 0, keap two elements
     console.log(flights2)});