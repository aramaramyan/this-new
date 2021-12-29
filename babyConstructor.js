"use strict";

/* Write a Baby constructor subclassing Person.
  Besides, name and age , Baby takes a third argument to initialize favoriteToy .
  Besides, the methods on Person.prototype, babies have the ability to .play() :
  Should return a string "Playing with x", x being the favorite toy. */

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

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
  console.log("this",this)
  return `${this.name} playing with ${this.favoriteToy}, ${this.favoriteToy} being the favorite toy.`
}


const baby = new Baby("Mike", 1, "Spider-Man");

console.log(baby.play()); //Mike playing with Spider-Man, Spider-Man being the favorite toy.