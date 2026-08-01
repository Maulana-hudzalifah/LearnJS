//sychronus = executes line by line consecutively in a sequatial manner code 
//            that waits for an operation to complete

// asychronnus = allows multiple operations to be performed concurrently
//               without waiting Doesn't block the execution flow and allow
//               program to continue (I/O operations, network, request, fetching data)
//               handled with:callbacks, promies, async/await


function func1(callback){
    setTimeout(() => {console.log("Task 1") 
                      callback()}, 3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);