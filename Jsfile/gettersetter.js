// class Rectangle{

//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error("width must be a positive number");
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.error("Height must be a positive number");
//         }
//     }

//     get width(){
//         return `${this._width.toFixed(1)}cm`;
//     }

//     get height(){
//         return `${this._height.toFixed(1)}cm`;
//     }

//     get area(){
//         return `${(this._width * this._height).toFixed(1)}cm^2`;
//     }

// }

// const rectangle = new Rectangle(3, 4);

// // rectangle.width = 5;
// // rectangle.height = 6;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);


class Person{

    constructor(firstName, lastName, age ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0 ){
            this._firstname = newFirstName;
        }
        else{
            console.error("First Name Must Be a Non-Empty String");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0 ){
            this._lastname = newLastName;
        }
        else{
            console.error("Last Name Must Be a Non-Empty String");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negative number");
        }
    }

    get firstName(){
        return this._firstname
    }

    get lastName(){
        return this._lastname;
    }

    get fullName(){
        return this._firstname + " " + this._lastname;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Maulana", "Hudzalifah", 21);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

