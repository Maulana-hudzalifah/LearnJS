class product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`product: ${this.name}`)
        console.log(`price: ${this.price}`)
    }

    calculatorTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05;

const product1 = new product("shirt",19.99);
const product2 = new product("pants",22.40);

product2.displayProduct();

const total = product2.calculatorTotal(salesTax);
console.log(`Total Price(With Tax): $${total.toFixed(2)}`)
