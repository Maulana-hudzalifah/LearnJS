// Dom Navigation = The Process navigating through the structure 
//                  of an HTML document using JavaScript 

//.firstElementChild
//.lastElementChild
//.nextElementChild
//.previousElementChild
//.parentElementChild
//.childern


//Example 1 FIRSTELEMENTCHILD!!!!!!!!!!!!!!!!!!

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";


// const ulElement = document.querySelectorAll("ul");

// ulElement.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "red";
// });

// Example 2 LASTELELEMENTCHILD!!!!!!!!!!!!!!!!

// const element = document.getElementById("vegetables");
// const lastchild = element.lastElementChild;
// lastchild.style.backgroundColor = "red"

// const ulElement = document.querySelectorAll("ul");

// ulElement.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "red";
// });

// Example 3 NEXTELEMENTCHILD!!!!!!!!!!!!!!!!!!!

// const element = document.getElementById("vegetables");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "red";

// Example 4 PREVIOUSELEMENTSIBLING!!!!!!!!!!!!!!!!!!

// const element = document.getElementById("desserts");
// const preSibling =  element.previousElementSibling;
// preSibling.style.backgroundColor = "red";


// Example 5 PARENTELEMENTCHILD!!!!!!!!!!!!!!!!!!!!!

// const element = document.getElementById("cake");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

// Example 6 CHILDREN
const element = document.getElementById("fruits");
const childern = element.children;

 childern[0].style.backgroundColor = "yellow"

