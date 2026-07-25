class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed os ${speed}mph`);
    }
}
class Rabbit extends Animal{
    constructor(name, age, runspeed){
        super(name, age);
        this.runspeed = runspeed;
    }

    run(){
        console.log(`This ${this.name} can run `);
        super.move(this.runspeed);
    }

}
class Fish extends Animal{
    constructor(name,age,swimspeed){
        super(name, age);
        this.swimspeed = swimspeed;
    }

    swim(){
        console.log(`This ${this.name} can swim `);
        super.move(this.swimspeed);
    }

}
class Hawk extends Animal{
    constructor(name,age,flyspeed){
        super(name, age);
        this.flyspeed = flyspeed;
    }

    fly(){
        console.log(`This ${this.name} can fly `);
        super.move(this.flyspeed);
    }

}

const rabbit = new Rabbit("bunny", 1, 25);
const fish = new Fish("nemo", 1, 25);
const hawk = new Hawk("Garuda", 1, 25);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runspeed)

hawk.fly()