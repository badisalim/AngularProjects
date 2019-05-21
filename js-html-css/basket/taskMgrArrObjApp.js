const fs = require('fs');
const groupArray = require('group-array');


fs.readFile('Array1.json', (err, content) => {
    const Array1 = JSON.parse(content)
    fs.readFile('Array2.json', (err, content) => {
        const Array2 = JSON.parse(content)
        fs.readFile('Array3.json', (err, content) => {
            const Array3 = JSON.parse(content)
            fs.readFile('Array4.json', (err, content) => {
                const Array4 = JSON.parse(content)


                Array.prototype.groupBy = function (prop) {
                    return this.reduce(function (groups, item) {
                        const val = item[prop]
                        groups[val] = groups[val] || []
                        groups[val].push(item)
                        return groups
                    }, {})
                };

                console.log(Array1.groupBy('time'));
                console.log('------------------------------');

                console.log(groupArray(Array2, 'Phase'));
                console.log('-------------------');

                console.log(groupArray(Array3, 'tag'))
                console.log('------------------------------');

                
                    const g=groupArray(Array4, 'data.year', 'data.tag', 'data.month', 'data.day');
                    console.log(JSON.stringify(g,null, 1))
                console.log('------------------------------');
const e=Object.values(Array4)
//console.log(Array4);

//console.log(e);


            });
        })
    })
})


_ = require('lodash');

var nest = function (seq, keys) {
    if (!keys.length)
        return seq;
    var first = keys[0];
    var rest = keys.slice(1);
    return _.mapValues(_.groupBy(seq, first), function (value) { 
        return nest(value, rest)
    });
};
var data = [
    { type: "apple", color: "green", quantity: 1000 }, 
    { type: "apple", color: "red", quantity: 2000 }, 
    { type: "grape", color: "green", quantity: 1000 }, 
    { type: "grape", color: "red", quantity: 4000 }
  ];

  console.log(groupArray(data, 'type','color', 'quantity'));
  
  var byType = function(d) {
    return d.type;
  };
  
  var byColor = function(d) {
    return d.color;
  };
  
  var byQuantity = function(d) {
    return d.quantity;
  };
  console.log(nest(data, [ 'quantity','color','type']));
  
  console.log(nest(data, [byColor,byType, byQuantity]));