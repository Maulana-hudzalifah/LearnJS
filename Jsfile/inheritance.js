class animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} running`);
    }
}
class Fish extends animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} swimming`);
    }
}
class Hawk extends animal{
    name = "hawk";

    fly(){
        console.log(`This ${this.name} flying`);
    }
}

const rabbit = new Rabbit();
const fish   = new Fish();
const hawk   = new Hawk();



console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
