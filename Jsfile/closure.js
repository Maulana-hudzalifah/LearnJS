// Example 1
// function outer(){

//     let message = "hello";

//     function inner(){
//         console.log(message);
//     }

//     inner();
// }

// outer();

// Example 2
   
// function createCounter(){

//     let count = 0;
    
//     function increment(){
//         count++;
//         console.log(`Count increased to ${count}`)
//     }
    
//     function getCount(){
//         return count;
//     }

//     return{increment, getCount};
// }
    
// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getCount()}`);

// Example 3

function createGame(){

    let score = 0; 

    function increasedScore(points){
    score += points;
    console.log(`+${points}pts`);
    }

    function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);
    }

    function getscore(){
      return score;
    }

    return{increasedScore, decreaseScore, getscore};
}

const game = createGame();

game.increasedScore(5);
game.increasedScore(6);
game.decreaseScore(7);
console.log(`The Final Score is ${game.getscore()}pts`);