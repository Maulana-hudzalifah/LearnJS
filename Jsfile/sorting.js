// example 1
// let numbers = [1, 10 , 2, 9, 3, 8, 4, 7, 5, 6];

// numbers.sort((a, b) => b - a );

// console.log(numbers);

//example 2
const people = [{name: "Maulana", age: 33, gpa: 4.0},
                {name: "Monica", age: 33, gpa: 3.5},
                {name: "Monahu", age: 18,  gpa: 2.0},
                {name: "Manaca", age: 18, gpa: 3.0}];

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

