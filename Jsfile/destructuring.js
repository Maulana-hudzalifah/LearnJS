//Examples 1
//Swap The Value of Two Variables

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);



//Examples 2
// Swap 2 Element in a Array 

// const colors = ["red", "green","blue","black","white"];

// [colors[0], colors[4]] = [colors[4], colors[0]]

// console.log(colors);



// Examples 3
// Assign Array Elements to Variables

// const colors = ["red", "green","blue","black","white"];

// const [firstColor, secondColor, ThirdColor , ...extraColor] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(ThirdColor);
// console.log(extraColor);

// Examples 4 
// Extract values from object 

// const person1 = {
//     firstName:"Maulana",
//     lastName:"Hudzalifah",
//     age: 23,
//     job: "Investor",
// }
// const person2 = {
//     firstName:"Monica",
//     lastName:"LRNA",
//     age: 23,
// }

// const{firstName,lastName , age, job="unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// Examples 5 
// Destructure In Function Parameters

function displayPerson({firstName, lastName, age, job}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName:"Maulana",
    lastName:"Hudzalifah",
    age: 23,
    job: "Investor",
}
const person2 = {
    firstName:"Monica",
    lastName:"LRNA",
    age: 23,
}


displayPerson(person2);