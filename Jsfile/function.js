// function happybirthday(username, age){
//     console.log("Happy birthday to you");
//     console.log("Happy birthday to you");
//     console.log(`Happy birthday dear you ${username}!`);
//     console.log(`You are ${age}years old`);
// }

// happybirthday("Maulana", 17);
// happybirthday("Monica", 17);

function add(x, y){
 return x + y;
}
function subTract(x, y){
    return x - y;
}
function divide(x, y){
    return x / y;
}
function isEven(number){

    // if(number % 2 === 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    return number % 2  === 0 ? true : false;

}
function isValidEmail(email){
    
    // if(email.includes("@")){
    //     return true ;
    // }
    // else{
    //     return false;
    // }

     return email.includes("@") ? true : false;

    
}


console.log(isValidEmail("flamefoid0@Gmail.com"))
console.log(isEven(12));