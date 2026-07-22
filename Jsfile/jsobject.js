const person1 = {
    firstName:"Maulana",
    lastName:"Hudzalifah",
    age: 17,
    isEmployed: true,
    sayHello: function(){console.log("hello")},
    eat: function(){console.log("I eat krabby patty")},
}

const person2 = {
    firstName:"Monahu",
    lastName:"Kaeru",
    age: 17,
    isEmployed: false,
    sayHello:() => console.log("hello"),
    eat: () => console.log("I eat pizza"),
}

person1.eat();
person2.eat()


// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);
// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);
