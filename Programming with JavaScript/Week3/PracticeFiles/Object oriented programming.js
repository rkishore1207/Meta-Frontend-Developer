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
