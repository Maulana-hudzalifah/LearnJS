//example 1
const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories:45 },
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "grape", color: "purple", calories: 37}];



// console.log(fruits[0].calories);
// fruits.push({name: "grapess", color:"purple", calories:62});

// console.log(fruits);

// -------------forEach()-------------------
// fruits.forEach(fruit => console.log(fruit.c));

// -------------map()-----------------------
// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);

// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

//  ------------filter()------------------

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories > 100);


// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);

// ------------reduce()-------------------

const maxfruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit: max );

const minfruit = fruits.reduce((min, fruit) => 
                                fruit.calories < min.calories ?
                                fruit: min );
console.log(maxfruit);
console.log(minfruit);


