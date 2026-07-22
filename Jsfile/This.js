const person1 = {
    name: "Maulana",
    favfood: "Pizza",
    eat: function(){console.log(`i am ${this.name} and i eating ${this.favfood}`)},
}
const person2 = {
    name: "Monahu",
    favfood: "Taco",
    eat: () => {console.log(`i am ${person2.name} and i eating ${person2.favfood}`)},
}

person2.eat()