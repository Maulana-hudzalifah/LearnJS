// class Mathutil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2;
//     }
//     static getcircumference(radius){
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }


// console.log(Mathutil.PI);
// console.log(Mathutil.getDiameter(10));
// console.log(Mathutil.getcircumference(10));
// console.log(Mathutil.getArea(10));

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} user online`);
    }
    sayHello(){
        console.log(`Hello my username is ${this.username}`);
    }
}


const user1 = new User("Maulana");
const user2 = new User("Monahu");

user2.sayHello()

console.log(user1.username);
console.log(user2.username);
User.getUserCount();