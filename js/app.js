"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_1 = require("./class");
//  creating instance
var dreamCar = new class_1.Car('Mercedes', 'g-wagon', 2021);
console.log("Make: ".concat(dreamCar.make));
console.log("Make: ".concat(dreamCar.model));
console.log("Make: ".concat(dreamCar.year));
dreamCar.start();
