// element selec = Method used to target and  manipulate HTML elements 
//                 they allow you to select one or multiple HTML elements
//                 from the DOM (DOCUMENT OBJECT MODEL)

// document.getElementById();           // ELEMENT OR NULL
// document.getElementsClassName();     // HTML COLLECTION
// document.getElementByTagName();      // HTML COLLECTION 
// document.querySelector();            // ELEMENT OR NULL
// document.querySelectorAll();         // NODELIST

//Example 1
// const myheading = document.getElementById("my-heading");
// myheading.style.backgroundColor = "yellow";
// myheading.style.textAlign = "center";

// console.log(myheading);

//Example 2
// const fruits = document.getElementsByClassName("fruit");

// Array.from(fruits).forEach(fruit =>{
//     fruit.style.backgroundColor = "red";
// });

//Example 3
// const h4Element = document.getElementsByTagName("h4");
// const liElement = document.getElementsByTagName("li")

// Array.from(h4Element).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElement).forEach(liElements => {
//     liElements.style.backgroundColor = "green";
// });

//Example 4 
// const element = document.querySelector(".fruit");

// element.style.backgroundColor = "yellow";


//Example 5 
// const foods = document.querySelectorAll("li");

// foods.forEach(food =>{
//     food.style.backgroundColor = "yellow"
// });