// function openFridge(...foods){
//     console.log(...foods);
// }
// function getfood(...foods){
//     return foods;
// }
// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hot dog";
// const food4 = "sushi";

// //openFridge(food1, food2, food3, food4)

// const foods = getfood(food1, food2, food3, food4);

// console.log(foods)

// function sum(...numbers){

//     let result = 0;
//     for(let number of numbers){
//         result += number ;
//     }
//     return result;
// }
// const total = sum(1 , );
// console.log(`your total is $${total}`)

// function getaverage(...numbers){

//     let result = 0;
//     for(let number of numbers){
//         result += number ;
//     }
//     return result / numbers.length;
// }

// const total =  getaverage(75, 100, 85, 90, 50);

// console.log(total);

function combinestring(...string){
    return string.join(" ");
}

const fullname = combinestring("Mr." , "Monahu", "Hudza")

console.log(fullname)