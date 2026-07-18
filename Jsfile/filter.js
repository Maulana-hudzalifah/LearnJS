// let numbers = [1, 2, 3, 4, 5 ,6 ,7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(evenNums);

// function isEven(element){
//     return element % 2 !== 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }

// const ages = [16, 17 ,18 ,19, 20, 60];
// const adults = ages.filter(isAdult);
// const childern = ages.filter(isChildern);
// const old = ages.filter(OLD);


// console.log(old);


// function isAdult(element){
//     return element >= 18;
// }

// function isChildern(element){
//     return element < 18;
// }

// function OLD (element){
//     return element > 20;
// }

const word = ["apple" , "orange" , "grape",
              "coconut", "banana","kiwi"];

const shortword = word.filter(getshortwords);
const longword = word.filter(getlongword)

console.log(longword);

function getshortwords(element){
    return element.length <= 6;
}

function getlongword(element){
    return element.length > 5;
}