const fs = require("fs");

fs.readFile("europe.json", (err, content) => {

    const europe = JSON.parse(content);
    console.log(Object.values(europe));

    // console.log(test);
    const top3most = Object.values(europe)
        .filter(e => e.population)
        .filter(e => e.population !== null && e.population !== "0")
        .sort((a, b) => (b.population - a.population))
        .slice(0, 3)

    console.log("top3most :");
    console.log(top3most);
    console.log("------");

    const top3least = Object.values(europe)

        .filter(e => e.population !== null && e.population !== "0")
        .sort((a, b) => (a.population - b.population))
        .slice(0, 3)
    //.map(e=>parseFloat(e.density))
    console.log("top3least:");
    console.log(top3least);

});