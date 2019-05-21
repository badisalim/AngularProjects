var request = require('request');

request('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-population-density.json', function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML for the Google homepage.

    const test = JSON.parse(body)
    // console.log(test);
    const top3most = test
        .filter(e => e.density)
        .sort((a, b) => (b.density - a.density))
        .slice(0, 3)
        console.log("top3most :");
        
    console.log(top3most);
    console.log("------");

    const top3least = test
    
        .filter(e => e.density !== null && e.density !== "0")
        .sort((a, b) => (a.density - b.density))
        .slice(0, 3)
        //.map(e=>parseFloat(e.density))
        console.log("top3least:");
    console.log(top3least);

});