//Error = an Object that is created to represent a problem 
//        that occrus occur often with user input or 
//        establishing a connection 

// try{} = encloses code that might potentially cause error
// catch{} = catch and handle any thrown errors from try {}
// finally{} = {optional} always executes. used mostly for 
//              clean up ex,close files, close connections, release resources

//Example 1
// try{
//     console.log("hello");
//     //NETWORK ERRORS
//     //PROMISE REJECTION
//     //SECURITY ERRORS
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     //closefiles
//     //close connections
//     //release resources
//     console.log("This always execute");
// }



// console.log("you have reached the end!");

//Example 2
// try{
//     const dividend = Number(window.prompt("enter a dividend"));
//     const divisor = Number(window.prompt("enter a divisor"));

//     if(divisor == 0){
//         throw new Error("You cant divide by zero!");
//     }
//     if(isNaN(dividend)|| isNaN(divisor)){
//         throw new Error("values must be a number")
//     }


//     const result = dividend / divisor;
//     console.log(result);
// }

// catch(error){
//     console.error(error);
// }

// console.log("you have reached the end")