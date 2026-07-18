// let username;

// do{
//     username = window.prompt(`enter your username`);
// }while(username === "" || username === null)

// console.log(`Hello ${username}`);

// while(username === "" || username === null){
//    username = window.prompt(`enter your name`);
// }
// console.log(`hello ${username}`);

let loggedin = false;
let username;
let password;

do{
    username = window.prompt(`enter your name`);
    password = window.prompt(`enter your password`);

    if(username == "myUsername" && password === "myPassword"){
        loggedin = true;
        console.log("you are logged in");
    }
    else{
        console.log("invalid creditials! please try again");
    }
}while(!loggedin)

