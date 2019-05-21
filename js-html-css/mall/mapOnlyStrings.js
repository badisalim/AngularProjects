function mapOnlyStrings(array) {
    array = ["freeCodecamp", "Badi"];
    array2 = array.split(' ');
    newarray = [];
    console.log(array2.charAt(0));

    //return array;
}; // Returns "f"
let map = new Map();

map.set('1', 'str1'); // a string key
map.set(1, 'num1'); // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
// alert(map.get(1)); // 'num1'
// alert(map.get('1')); // 'str1'


const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog']

// Secret Message.
const secretMessage = animals.map((animal) => animal[0]) //.join('')

// Log.
console.log(secretMessage) // "HelloWorld"


function mapOnlyStrings(str) {
    //const str = ["freeCodecamp","Badi"];
    var array1 = str.split([' ']);
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0));

    }
    return newarray1.join(' ');
}


console.log(mapOnlyStrings("the quick brown fox big"));