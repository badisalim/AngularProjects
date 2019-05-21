//call-------------

const person = {
  setName: function (name) {
    this.name = name;
  },
  introduce: function () {
    console.log(`My name is ${this.name}`);
  }
};

const setName = person.setName;
setName.call(person, "Hubert");
person.introduce();

//apply---------------------

const person2 = {
  setName2: function (name) {
    this.name = name;
  },
  introduce: function () {
    console.log(`My name is ${this.name}`);
  }
};

const setName2 = person2.setName2;
setName2.apply(person2, ["Hubert2"]);
person2.introduce();

//bind-----------------------

const person3 = {
  setName3: function (name) {
    this.name = name;
  },
  introduce: function () {
    console.log(`My name is ${this.name}`);
  }
};

const setName3 = person3.setName3;
const setNameOnPerson = setName3.bind(person3);
setNameOnPerson("Hubert3");
person3.introduce();

//Applying to a "callback-based" function: call

const person4 = {
  setName4: function (name) {
    this.name = name;
  },
  introduce: function () {
    console.log(`My name is ${this.name}`);
  }
};

function nameSetter(fn, context) {
  fn.call(context, "Hubert4");
}

nameSetter(person4.setName4, person4);
person4.introduce();

//Applying to a "callback-based" function: apply

const person5 = {
  setName5: function (name) {
    this.name = name;
  },
  introduce: function () {
    console.log(`My name is ${this.name}`);
  }
};

function nameSetter2(fn2, context) {
  fn2.apply(context, ["Hubert5"]);
}

nameSetter2(person5.setName5, person5);
person5.introduce();

//
const person6 = {
  setName6: function (name) {
    this.name = name;
  },
  introduce: function () {
    console.log(`My name is ${this.name}`);
  }
};

function nameSetter3(fn3) {
  fn3("Hubert6");
}

nameSetter3(person6.setName6.bind(person6));
person6.introduce();

//Wrapper----------------
const person7 = {
  setName7: function (name) {
    this.name = name;
  },
  introduce: function () {
    console.log(`My name is ${this.name}`);
  }
};

function nameSetter4(fn4) {
  fn4("Hubert7");
}
nameSetter4(name => person7.setName7(name));
person7.introduce();
//wrapper---------------
const person8 = {
  setName8: function (name) {
    this.name = name;
  },
  introduce: function () {
    console.log(`My name is ${this.name}`);
  }
};

function nameSetter5(fn5) {
  fn5("Hubert8");
}
const wrapper = (name => person8.setName8(name))

nameSetter5(wrapper);
person8.introduce();