# Introduction to JavaScript
## Week 3
### Functional Programming
* It consists of Data and functions and data are exists outside of functions.
* Object oriented program is combination of both data and functions.
* defaultly every function return **undefined**.
```javascript

console.log("Hello");
//output
//Hello
//undefined -> always funtion return undefined

function consoleLog(value)
{
    console.log(value);
    return value;
}
consoleLog("Hello");

//Output
//Hello
//'Hello'
```
* we can run a funtion as a recursive manner, if condition is not satisfied it will run as a infinite loop.
### Scope
* The variable that is declared outside of funtion is having Global scope and **can accessible** to wherever in the program.
* And the variable that is declared within the funtion is have local scope or Function scope and **cannot access** outside of the function.
### Functional Programming
* Styles of coding is the `Paradigm`.
* Fp is just having **data** and **funtions** in the program and oop is combined that **data as properties** and **functions as methods** are bundled in objects.
```javascript
//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false
```
* There are three ideas for functional programming
1. **First-class** -> we can pass number, strings, objects as parameters and assigning the returned value to variable.
2. **Higher-order** -> pass function as parameters and return funtion itself
```javascript
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}
```
3. **Pure Function and side-effects**
### Var, let and Const
* `var` is for **Global scope** and we can **reDeclare** another value to the same variable and we can use var variable before it is declared.
```javascript
console.log(user);
var user;
//undefined -> it will work and print undefined
var number=2;
var number = "Kishore";
//it will print 'Kishore'
```
* `let` is mainly for **block scope** and we couldn't able to redeclare and wouldn't able to use before it is declared.
```javascript
console.log(user);
let user;
//Reference error
let number = 2;
let number = "Kishore";
//Syntax error
```

* `Const` it must be initialized when it is declared and we can not **reassign** itself.
### How OOP different from Functional Programming
```javascript
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
```
* here instead of **purchase** we can use `this` keyword also that is to indicate that this is a current object.
* combined data and functionalities into a object and easy to use.
## Object Oriented Programmig (OOP)
* There is class which helps to create objects and act as a template and it mimic the real world objets.
* There are four principles of OOPs,
    1. Inheritance
    2. Encapsulation
    3. Polymorphism
    4. Abstraction
* And objects are ordered in **hierarchial structure** and every class are inherited from `Object class`.
1. Inheritance:
* One class is utilizing the properties and methods of another class which is referred to as **base or parent** class.
```javascript
class Animal
{}
class Bird extends Animal
{}
class Eagle extends Bird
{}
```
