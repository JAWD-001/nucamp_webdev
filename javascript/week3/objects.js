//objects are data structures that contain attributes and methods that are easily reproducible by creating subclasses and instantiating objects.
const dragon = {
  color: "red",
  maxHP: 1000,
};

//can access properties of the object through dot or bracket notation, but dot is preferable

dragon.color;
dragon["color"];

//object methods

const blueDragon = {
  color: "blue",
  maxHP: 10000,
  roar() {
    console.log("The dragon breathes ferociously. Attack doubles.");
  },
};

blueDragon.roar();

//adding properties to objects, use = sign to add property to an existing object. Use object.propertyName = value. Can also be used to reassign properties.
dragon.element = "fire";
dragon.color = "crimson";

//adding methods to objects is a little different, to add you must call the object, name the new method, and then call an annoymous function to add it to the object.
dragon.attack = function () {
  console.log("The dragon breathes a stream of fire");
  damage = 100;
};

//to update an existing method, just override in the same way that you create the method.
dragon.attack = function () {
  console.log(
    "The dragon breathes a stream of white-hot fire buring everything in its path."
  );
  damage = 1000;
};

//method parameters, assign params just like setting a function
const dragon2 = {
  color: "aqua",
  maxHP: 1000,
  swim: function (dir) {
    console.log(`The dragon swims toward the ${dir}.`);
  },
  roar: function () {
    console.log("The dragon roars ferociously");
  },
};

//This keyword tells an object to look inside the object for a property, helps to refer back without having to hard code
const dragon3 = {
  color: "aqua",
  maxHP: 1000,
  swim: function (dir) {
    console.log(`The dragon swims toward the ${dir}.`);
  },
  roar: function () {
    console.log("The ${this.color} dragon roars ferociously");
  },
};

//JS classes are templates for objects, help create multiple instances of an object. start with class then object name, which must be capitalized. After, write constructor with default values in()

class Dragon {
  constructor(color, maxHP) {
    this.color = color;
    this.maxHP = maxHP;
  }
}

//when instantiating new objects, remember to assign an object name, then = new ObjectName(values of constructor) as such.

const mechaDragon = new Dragon("silver", 1000000);
const babyDragon = new Dragon("violet", 10);

//can add default methods to classes, pretty much identical to a single object. Outside the constructor code block, as so.

class Dragon {
  constructor(color, maxHP) {
    this.color = color;
    this.maxHP = maxHP;
    this.scary = true;
  }
  roar() {
    console.log(`The ${this.color} dragon, let's out a ferocious roar!`);
  }
}
//now have a dragon class (think blueprint), that can be called to instantiate multiple objects easily.

//class inheritance allows child classes to be created from parent classes, with parent being general and children being more specific.
class Monster {
  constructor(type, color, maxHP) {
    this.type = type;
    this.color = color;
  }
  roar() {
    console.log(`The ${this.color} ${this.type} lets out a roar!`);
  }
}

//to create a child class, use the keyword extends to add methods, must use a super constructor to inherit properties from parent. So use the constructor to tell the class what properties should be expected. Use the super method to tell the class which properties to inherit from parent.

class Dragon extends Monster {
  constructor(type, color, element) {
    super(type, color);
    this.element = element;
  }
  fly(dir) {
    console.log(
      `The ${this.color} ${this.element} ${this.type} flies toward the ${dir}!`
    );
  }
}

let waterDragon = new Dragon("dragon", "blue", "water");
waterDragon.fly("north");
//The blue water dragon flies toward the north!

class Wolf extends Monster {
  constructor(type, color, element, subtype) {
    super(type, color);
    this.element = element;
    this.subtype = subtype;
  }
  howls(vol) {
    console.log(
      `${this.color} ${this.element} ${this.type} howls at the moon because it is a ${this.subtype} of wolf.`
    );
  }
}

let wolf = new Wolf("wolf", "white", "water", "dire");
wolf.howls("loudly");

//when a function is called in javascript, js provides a default (undefined) value for a variable that is not provided. Can change this by adding a default value in the function when creating it

function charName(fname, lname) {
  if (fname === undefined) {
    fname = "John";
  }
  if (lname === undefined) {
    lname = "Doe";
  }
  console.log(fname, lname);
}

charName("James");

//can also set them in the parameter list
function charName(fname = "John", lname = "Doe") {
  console.log(fname, lname);
}
charName("James");

//can also set the default into the class constructor
class Cat extends Monster {
  constructor(type, color, coat = "fluffy") {
    super(type, color);
    this.coat = coat;
  }
  meow() {
    console.log(`The ${this.coat} ${this.type} cat meows a lot`);
  }
}
let cat1 = new Cat("persian", "red");
cat1.meow();
