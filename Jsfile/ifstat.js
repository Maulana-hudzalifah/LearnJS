// let age = 13;

// if(age >= 18 ){
//     console.log("yoou are old enough to enter this site");
// }
// else{
//     console.log("you must be  18+ to enter this site");
// }


// let isStudent = false;

// if(isStudent){
//     console.log("You are student");
// }
// else{
//     console.log("You are not a student")
// }

// let age = 18;
// let hasLicense = false;

// if(age >= 16){
//     console.log("you are old enough to drive");

//     if(hasLicense){
//         console.log("you have your License");
//     }
//     else{
//         console.log("you do not have your License")
//     }
// }
// else{
//     console.log("you must 16+ to have License ");
// }

const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");
let age = 0;

mysubmit.onclick = function(){

    age = mytext.value;
    age = Number(age);
    if (age >= 100) {
        resultElement.textContent =  `you are too old to enter the site`;
    }
    else if (age == 0) {
         resultElement.textContent =  `you cant enter you just born`;
    }
    else if (age >= 18) {
        resultElement.textContent =  `you are old enough to enter the website`;
    }
    else if (age < 0) {
        resultElement.textContent = `you age cant be below 0`;
    }   
    else {
        resultElement.textContent = `you must be 18+ to enter this site`;
    }

}

