// const hello = function (){
//     console.log("hello")
// }

// const hello = (name, age ) => {console.log(`hello ${name}`)
//                                console.log(`you are old ${17} years old `)};

// hello("maulana", 17);

// setTimeout(function(){
//     console.log("hello");
// }, 3000);

// setTimeout (() =>console.log("Hello"), 3000);

const numbers = [1, 2, 3, 4, 5 , 6];

const squares = numbers.map((element)=> Math.pow(element, 2));
const cubes = numbers.map((element)=> Math.pow(element, 3));
const evenNums = numbers.filter((element)=> element % 2 === 0);
const oddNums = numbers.filter((element)=> element % 2 !== 0);
const total = numbers.reduce((accmulator , element) => accmulator + element);

console.log(total);