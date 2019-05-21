//Object.values()
const icecreamColors = {
    chocolate: 'brown',
    vanilla: 'white',
    strawberry: 'red',
}
delete icecreamColors.vanilla;
const colors = Object.values(icecreamColors);
console.log("Object.values :----" + "\n" + colors);
// colors will be equal to ["brown", "white", "red"]
//---------------------------------------------
//Object.keys()
const icecreamColors1 = {
    chocolate: 'brown',
    vanilla: 'white',
    strawberry: 'red',
}
const types = Object.keys(icecreamColors1);
console.log("Object.keys :----" + "\n" + types);
// types will be equal to ["chocolate", "vanilla", "strawberry"]
//-------------------------------------------------
//Object.entries()
const weather = {
    rain: 0,
    temperature: 24,
    humidity: 33,
}
const entries = Object.entries(weather);
console.log("Object.entries :----" + "\n" + entries);
// entries will be equal to
// [['rain', 0], ['temperature', 24], ['humidity', 33]]
//------------------------------------------------
//Object spread
const spreadableObject = {
    name: 'Robert',
    phone: 'iPhone'
};
const newObject = {
    ...spreadableObject,
    carModel: 'Volkswagen'
}
console.log("Object spread :---add new object");
console.log(newObject);

// newObject will be equal to
// { carModel: 'Volkswagen', name: 'Robert', phone: 'iPhone' }
//---------------------------------------------------------
//Function Rest
function displayArgumentsArray(...theArguments) {
    console.log("Function Rest :----" + "\n" + theArguments);
}
displayArgumentsArray('hi', 'there', 'bud');
// Will print ['hi', 'there', 'bud']
//------------------------------------------------------------
//Object.freeze()
const frozenObject = {
    name: 'Robert'
}
Object.freeze(frozenObject);
frozenObject.name = 'Henry';
console.log("Object.freeze :----");
console.log(frozenObject);

// frozenObject will be equal to { name: 'Robert' }
//-----------------------------------------------------------
//Object.seal()
const sealedObject = {
    name: 'Robert'
}
Object.seal(sealedObject);
sealedObject.name = 'Bob';
//sealedObject.wearsWatch = true;
console.log("Object.seal :-----")
console.log(sealedObject);
// sealedObject will be equal to { name: 'Bob' }
//----------------------------------------------------------
//Object.assign()--------...merging
const firstObject = {
    firstName: 'Robert'
}
const secondObject = {
    lastName2: 'Cooper'
}
const combinedObject = Object.assign(firstObject, secondObject);
console.log('Object.assign()------');

console.log(combinedObject);
const person2 = {
    fierstName: "Badi",
    lastName: "Raslan",
    age: 27
};
const combinedObject2 = {
    ...combinedObject,
    ...person2
};
console.log(combinedObject2)


// combinedObject will be equal to { firstName: 'Robert', lastName: 'Cooper' }
//------------------------------------------------------
//change element----
const person = {
    fierstName: "Badi",
    lastName: "Raslan",
    age: 27
};
person.age = 37;
person.jobe = 'engineer';
console.log(person);


// Create an object included function:
var person3 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person3.fullName());
// Display data from the object: 
//--------------------------
// four variables are created and assigned in a single go, 
// separated by commas
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type = 'Dot syntax';
myObj['date created'] = 'String with space';
myObj[str] = 'String value';
myObj[rand] = 'Random Number';
myObj[obj] = 'Object';
myObj[''] = 'Even an empty string';

console.log(myObj);

//-----------------------
var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Car('Nissan', '300ZX', 1992, ken);
var rand = new Person('Rand McKinnon', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');
car1.displayCar();
car2.displayCar();
rand.displayPerson();
ken.displayPerson();

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.displayPerson = displayPerson;
}

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.displayCar = displayCar;
}

function displayCar() {
    var result = 'A Beautiful ' + this.year + ' ' + this.make +
        ' ' + this.model;
    console.log(result);
}

function displayPerson() {
    var result2 = 'A Beautiful ' + this.name + ' ' + this.age +
        ' ' + this.sex;
    console.log(result2);
}

//------------------------
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum); // 390
//----------------------
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            console.log(obj[key] *= 2);
        }
    }
    console.log(menu);
}
//----------------------

function emp(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
e = new emp(103, "Vimal Jaiswal", 30000);

console.log(e.id + " " + e.name + " " + e.salary);
//-----------------------------
var US_COIN_VALUE = {
    QUARTER: 25,
    DIME: 10,
    NICKEL: 5,
    PENNY: 1

};
console.log(Object.freeze(US_COIN_VALUE));
//---------------------
var merge = function () {
    var obj = {},
        i = 0,
        il = arguments.length,
        key;
    for (; i < il; i++) {
        for (key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                obj[key] = arguments[i][key];
            }
        }
    }
    return obj;
};
var t1 = {
    key1: 50,
    key2: "test",
    key3: [5, 2, 76, 21]
};

var t2 = {
    key1: {
        ik1: "hello",
        ik2: "world",
        ik3: 3
    }
};
var t3 = {
    key2: 3,
    key3: {
        t1: 1,
        t2: 2,
        t3: {
            a1: 1,
            a2: 3,
            a4: [21, 3, 42, "asd"]
        }
    }
};

console.log(merge(t1, t2));
console.log(merge(t1, t3));
console.log(merge(t2, t3));
console.log(merge(t1, t2, t3));
console.log(merge({}, t1, {
    key1: 1
}));