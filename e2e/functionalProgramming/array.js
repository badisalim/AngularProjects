//devied numbers
function operations(numbers) {
    const halves = numbers.map(x => x / 2);
    return halves;
} // const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// const longWords = words.filter(word => word.length > 6);

const numbers = [2, 4, 8, 10];
const answer = operations(numbers);
console.log(answer);
//---------------------------------
const otherNumbers = [5, 6, 7, 8, 9, 10];
const otherAnswer = operations(otherNumbers);
console.log(otherAnswer);
//---------------------------------
//Array.from()---devied word to strings.
const newArray = Array.from('hello');
console.log("Array.from:-----" + "\n" + newArray+newArray.length);
// newArray will be equal to ['h', 'e', 'l', 'l', 'o']
//-----------------------------------
//devied sentence or word to strings.
const text = "I am Developpr";
const textSplit = text.split("");
console.log(textSplit+textSplit.length);
//[ 'I', ' ', 'a', 'm', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'p', 'r' ]
//-------------------------------------------
//Array spread-------------merg two arrays in one,it is like concat.
const spreadableOne = [1, 2, 3, 4];
const spreadableTwo = [5, 6, [4, 3], 7, 8];
const combined1 = spreadableOne.concat(spreadableTwo)
const combined = [...spreadableOne, ...spreadableTwo];
console.log("Array spread :-----" + "\n" + combined + '\n' + "concat :\n" + combined1);
// combined will be equal to [1, 2, 3, 4, 5, 6, 7, 8]
//---------
//slice----Remove an array element without mutating the original array.

const animals = ['squirrel', 'bear', 'deer', 'salmon', 'rat'];
const mammals = [...animals.slice(0, 3), ...animals.slice(4)];

console.log("slice----Remove an array element:----" + "\n" + mammals);

// mammals will be equal to ['squirrel', 'bear', 'deer', 'rat']
//-----------------------------------------------------
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const minMax = [];
const max = Math.max(...array);
const min = Math.min(...array);
minMax.push(min, max);

console.log('Min&Max---- "\n' + minMax);
//----------------------------
//Reading from many arrays as object
const flights = [
    ["Dmm", 'JED', '7:30am', 1936],
    ["RYD", 'JED', '8:30pm', 1948],
    ["MEK", 'JED', '10:30am', 1958]
];
flights.forEach(function (flight, i) {

    [fromCity, toCity, Time, flightNo] = flight
    //flights.shift(0); 
    // flights.pop(1);

    console.log(`${i + 1}.A flight from ${fromCity} to ${toCity} at${Time} flightNo ${flightNo} `);
});
const flights2 = flights.splice(0, 2)
// Starting at index position 0, remove two elements
console.log(flights);
// Starting at index position 0, keap two elements
console.log(flights2);
//------------------------------------

const list1 = ["bar", "baz", "foo", "qux"];
// Starting at index position 1, remove two elements
//output [ 'bar', 'qux' ]
const test1 = list1.splice(1, 2)
console.log(list1);
// Starting at index position 1, keap two elements
//output [ 'baz', 'foo' ]
console.log(test1);
//--------------------------------------
const a = {
    firstName: 'Badi',
    lastName: 'Raslan'
}
console.log(a);
console.log(Object.keys(a));
console.log('Name\n' + Object.values(a));

console.log(Object.values(a));
console.log(Object.entries(a));
//---------------------
var array1 = ['a', 'b', 'c'];
var iterator1 = array1.entries();
console.log(array1.entries());

//array1.forEach(e => (console.log(iterator1.next().value)));

//-------------------------
var elements = ['Fire', 'Wind', 'Rain'];
console.log(elements.join());
// expected output: "Fire,Wind,Rain"
console.log(elements.join(''));
// expected output: "FireWindRain"
console.log(elements.join('-'));
// expected output: "Fire-Wind-Rain"
//------------------------------------
var a1 = ['Wind', 'Rain', 'Fire'];
a1.join(); // 'Wind,Rain,Fire'
a1.join(', '); // 'Wind, Rain, Fire'
a1.join(' + '); // 'Wind + Rain + Fire'
a1.join(''); // 'WindRainFire'
console.log(a1);
//-----------------------------------
var array1 = ['a', 'b', 'c'];

array1.forEach(function (element) {
    console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"
//----------------------------
var array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
//---------------------------
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1



console.log(beasts.indexOf('giraffe'));
// expected output: -1
//---------------------------
var animals2 = ['Dodo', 'Tiger', 'Tiger', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals2.lastIndexOf('Dodo'));
// expected output: 3
console.log(animals2.indexOf('Tiger'));
console.log(animals2.lastIndexOf('Tiger'));
// expected output: 1
// start from index 2
console.log(animals2.indexOf('Tiger', 2));
// expected output: 4


var results = [
    ["Luke May", 43, "male", "married"],
    ["Sarah Saw", 54, "female", "single"],
    ["Magac gose", 51, "male", "single"]
];
var keys = ["name", "age", "gender", "status"];

var objectArray = []; // your result

results.forEach(r => {
    let obj = {};
    r.forEach((r, i) => {
        obj[keys[i]] = r;
    });
    objectArray.push(obj);
});

console.log(objectArray);