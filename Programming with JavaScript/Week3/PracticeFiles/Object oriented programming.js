//Functional Programming
var shoe = 100;
var tax = 1.2;
function calculatePrice()
{
    var totalPrice = shoe*tax;
    console.log(totalPrice);
}
calculatePrice();

//Object Oriented Programming
var purchase={
    shoe:100,
    tax:1.5,
    calculatePrice: function(){
        var totalPrice = purchase.shoe*purchase.tax;
        console.log(totalPrice); 
    }
}

purchase.calculatePrice();

//OOps with this keyword
var purchase={
    shoe:100,
    tax:1.5,
    calculatePrice: function(){
        var totalPrice = this.shoe*this.tax;
        console.log(totalPrice); 
    }
}

purchase.calculatePrice();

//Inheritance
var bird ={
    hasWings:true,
    canFly:true,
    hasFeathers:true
}

var bird1=Object.create(bird);// it will have the bird object as inherited
console.log(bird1);
console.log("bird1 has wings:",bird1.hasWings);
console.log("bird1 can fly:",bird1.canFly);
console.log("bird1 has feathers:",bird1.hasFeathers);
console.log(bird1);

var bird2 = Object.create(bird);
bird2.canFly=false;
console.log(bird2);
