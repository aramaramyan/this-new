"use strict";

/* Write a Car constructor that initializes model and milesPerGallon from arguments.
   All instances built with Car:
    should initialize with an tank at 0
    should initialize with an odometer at 0
   Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank.
   - STRETCH:
   Give cars ability to .drive(distance). The distance driven:
   Should cause the odometer to go up.
   Should cause the tank to go down taking milesPerGallon into account.
   STRETCH: A car which runs out of fuel while driving can't drive any more distance:

   The drive method should return a string "I ran out of fuel at x miles!" x being odometer */

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  if(typeof(gallons) !== "number" || isNaN(gallons)) {
    return "Type of function must be a number!";
  }

  this.tank = gallons;
  return this;
}

Car.prototype.drive = function(distance) {
  // You traveled 20 miles for every 1 gallon of gas.

  if(typeof(distance) !== "number" || isNaN(distance)) {
    return "Type of function must be a number!";
  }

  if(this.tank - distance / this.milesPerGallon >= 0) {
    this.odometer += distance;
    this.tank -= distance / this.milesPerGallon;
  } else if(this.tank - distance / this.milesPerGallon < 0) {
    const ranOutFuel = distance - Math.abs((this.tank - distance / this.milesPerGallon) * this.milesPerGallon);

    this.odometer += distance - (distance / this.milesPerGallon - this.tank) * this.milesPerGallon;

    return `"I ran out of fuel at ${ranOutFuel} miles!" ${this.odometer} being odometer.`;
  }
}

const car = new Car("Mercedes-Benz", 20);
console.log(car.fill(100));
console.log(car.drive(3000)); // "I ran out of fuel at 2000 miles!" 2000 being odometer.