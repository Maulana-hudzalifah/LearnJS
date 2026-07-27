// examples 1 

// const person = {
//     fullname:"Monahu Kalisna",
//     age: 20,
//     isStudent: true,
//     hobbies:["Coding","Football","Traveling"],
//     address:{
//         street: "Sangiran",
//         city: "Ngawi",
//         country: "Indonesia"
//     }
// }

// console.log(person.fullname);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.street);

//examples 2 array swap string

// const person = {
//     fullname:"Monahu Kalisna",
//     age: 20,
//     isStudent: true,
//     hobbies:["Coding","Football","Traveling"],
//     address:{
//         street: "Sangiran",
//         city: "Ngawi",
//         country: "Indonesia"
//     }
// }

// for(const property in person.address){
//     console.log(person.address[property])
// }


//examples 2

// class Person {

//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }




// class Address {

//     constructor(street, city ,country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Maulana", 17, "124 Sangiran St.", 
//                                           "Ngawi",
//                                           "Indonesia");
// const person2 = new Person("Monahu", 17, "124 Sangiran St.", 
//                                           "Ngawi",
//                                           "Indonesia");

// console.log(person2.name);