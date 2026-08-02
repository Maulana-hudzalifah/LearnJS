// DOM = Document Object Model
//       Object{} that represents the page you see in the browser
//       and provides you with API to intreact with it 
//       Web browser constructs the DOM when it loads an HTML document,
//       and stuctures all the elements in a tree-like representation
//       JS can access the DOM to dynamically 
//       change the content,structure, and style of a web page.




// console.log(document);

// document.title = "Mywebsite"
// document.body.style.backgroundColor = "hsl(0, 0%, 10%)";

// console.dir(document);


const username = "Monic";
const welcomemsg = document.getElementById("welcome-msg");

welcomemsg.textContent += username ===  "" ? `Guest` : username;

console.dir(document)