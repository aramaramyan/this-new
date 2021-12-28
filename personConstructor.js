"use strict";

/* Write a Person Constructor that initializes name and age from arguments.
   All instances of Person should initialize with an empty stomach array.
   Give instances of Person the ability to .eat("someFood") :
   When eating an edible, it should be pushed into the stomach .
   The eat method should have no effect if there are 10 items in the stomach .
   Give instances of Person the ability to .poop() :
   When an instance poops, its stomach should empty.
   Give instances of Person a method .toString() :
   It should return a string with name and age . Example: "Mary, 50" */

function Person(name, age) {
  this.name    = name;
  this.age     = age;
  this.stomach = [];
}

Person.prototype.eat = function(...foods) {
  for(let i = 0; i < foods.length; i++) {

    if(this.stomach.length > 10) {
      return `${this.name} is not hungry!`
    }

    if(typeof(foods[i]) === "string") {
      this.stomach.push(foods[i]);
    }
  }
};

Person.prototype.poop = function() {
  this.stomach = [];
}

Person.prototype.toString = function() {
  return `name: ${this.name}, age: ${this.age}.`;
}

const user1 = new Person("John", 24);

console.log(user1.eat("Apple", "Watermelon", "Orange", "Pear", "Cherry", "Strawberry", "Nectarine", "Grape", "Mango", "Blueberry", "Pomegranate", "Banana", "Pineapple")); // John is not hungry!
user1.poop(); // stomach []
console.log(user1.toString()); // name: John, age: 24.