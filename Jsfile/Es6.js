//ES6 module = an external file that contains reusable code that imported    into other Javascript files can contain variables, clases, functions ... and more intrudaction as part of ECMAScript 2015 update


import { PI, getCircumfrence, getArea, getVolume } from './math.js';

console.log(PI);
const circumfernce = getCircumfrence(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumfernce.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`)
console.log(`${volume.toFixed(2)}cm^3`)