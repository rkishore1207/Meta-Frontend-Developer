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
2. Encapsulation:
* To hide the **internal functionalities** and just we would use the outer thing that is `toUpperCase()` is the predefined funtion and it will change everything into UpperCase but we doesn't know how to do that.
3. Abstraction:
* To use the interface to does not expose the code we wrote in the function.
4. Polymorphism:
* Many representaion that is one funtion will perform in a different form and have different versions.
* Eg., concat() function is concatenate two strings into single string 
```javascript
"abc".concat("efg");//abcdef
//and for array
["abc"].concat("edg");//['abc','efg'] 
```
* For different purpose concat() function perform different operations.
### Constructors
* It is Special Function used to **create an object** withour constructor we could not able *instantiate* object.
* <u>The constructor will be used to build properties on the future object instance</u>.
* It is not necessary to be defult or parameterized constructor but every class must need a `constructor`.
* JavaScript have lot of built-in object types commonly referred as <u>**Native Objects**</u>.
    1. Date
    2. Math
    3. Random
    3. Array
    4. Map
    5. Set
    6. Promise
    7. JSON etc..
* But for native ojects those may or may not be has constructor but that is not important for native objects.
```javascript
Math.pow(2);//Math object doesn't gave constructor so we couldn't invoke
```
* We can not compare two objects with equal operator because during we use equal operator it will check the two variables memory not the value and for object case every object is a new one so it will throw false.
```javascript
new String("abc") === new String("abc")// false

```
> - In javascript instead of using Object,Array,Function and Regular Expression we could use '{}','[]','()' and '/some words/';
----------------------
* Object.create(); -> inherit the parent object into it
* After inheriting, if we want to use the parent class's properties we would use `Super` keyword.
```javascript
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);//utilizing the parent's properties
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
}
```
* console.log(this) -> will print the properties of the objects
* Object.getPrototypeOf(objName); -> will print the methods of objects.