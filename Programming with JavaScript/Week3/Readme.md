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
* <u>Prototype refer to the methods in the class.</u>
### Default Parameters
```javascript
class Fruit
{
    constructor(color="red",name="apple")
    {
        this.color=color,
        this.name=name
    }
}
// this also default constructor
```
## De-Structuring arrays and Objects
* We can assign already exits value to a destructed variable by **{}**.
```javascript
let {PI}=Math;
PI;//3.14
//but here lowercase 'pi' not applicable
```
* The property name (variable name) should be as same as in the object that is **PI** should be capital not small case.
_____________________________
### For of Loop
* Defaultly <u>**Objects are not iteratable**</u> unlike arrays and sets.
* But with the help of some built-in functions we should able to loop over the objects.
    1. Object.keys()
    2. Object.values()
    3. Object.entries()
```javascript
// For of Loop
var bike ={
    speed:100,
    color:"Black"
}
for(var item of Object.keys(bike)){ //Print only keys of the properties
    console.log(item);
}
for(var item of Object.values(bike)){ //Print only values of the properties
    console.log(item);
}
for(var item of Object.entries(bike)){ //It will print 2D arrays that is both keys and values
    console.log(item);
}
```
### Difference Between For-in loop and For-of loop
* `For in loop` iterate through object properties as well as prototype properties.
* Whereas `For of loop` iterate only through object's own proterty not iterate to prototype properties.
### Template Literal
* Strings that are enclosed in `backticks` are called **template literals**.
* Without `+` operator we can add strings and we can able to break the string into **multiline**.
* content inside the curly braces are `javascript` and outside of that is `string`.
* we can so **expression evaluation** and also do **ternary operation** with template literal.
```javascript
`Hi ${variable name} `
`${1+1+3} star`
```
## Data Structures
### Arrays
1. forEach()
2. filter()
3. map()
```javascript
var arrays = [10,20,30,40,50];
arrays.forEach(function(array,index){
    console.log(`${index} : ${array}`);
})
//the function which is inside forEach() method is apply for each and every element in the array and first parameter represents element and second represent index.

arrays.filter(function(array){
    return array>30;
})

arrays.map(function(array){
    return array/10;
}) //it is just like iterating the array
```
### Objects (converting objects into array)
```javascript
//Converting objects into array
function ObjectIntoArray(){
    var result=[];
    var car ={
        speed:100,
        color:"Red",
        Model:"Benz"
    }
    var carKeys=Object.keys(car);
    carKeys.forEach(function(key){
        result.push(key,car[key]);
    })
    console.log(result);
}
ObjectIntoArray();//[ 'speed', 100, 'color', 'Red', 'Model', 'Benz' ]
```
### Maps
```javascript
//Map
var bikes = new Map();
bikes.set(1,"Pulsar");
bikes.set(2,"R15");
bikes.set(3,"Mt");
console.log(bikes);
//to print particular element
console.log(bikes.get(2));
```
### Set
* It is similar to arrays but it won't accept the repetitive elements.
```javascript
var bikes = ["pulsar","R15","Mt","pulsar","gixxer","R15"];
var uniqueBikes = new Set(bikes);
console.log(uniqueBikes);

let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(2);
    set.add(1);
// [1,2,3]
```
### Spread Operator
* The spread operator allows you to pass all array elements into a function <u>without having to type them all individually</u>.
* We can also add the existint objects property or array elements into the new object and array but spread operator.
    1. We can concatenate arrays and objects
    2. We can new elements to array
    3. split string into an array
    4. Copy an array or object into an other object or array
### Rest Operator
* The rest operator allows you to take items from an array and use them to create a separate sub-array.
```javascript
function calculateValues(tax,...rest){
    return rest.map(item => tax*item);
}
console.log(calculateValues(1.1,46,67,89,93)); //[ 50.6, 73.7, 97.9, 102.30000000000001 ]
```
## Javascript in the Browser
### JavaScript DOM Manipulation
* Browser shows the `html` page to the user and the same page's **object Model(javascript object)** that is, that currently active page's **(Document)** complete object Model is stored in the *browser memory*, aka `DOM`. 
* We can modify that DOM by `Javascript`, and that changes 1st affect the `DOM` which is stored in the **Browser memory**, after then it will reflect in the **Browser's HTML page**.
```javascript
const h2 = document.createElement('h2');
h2.innerText="This is h2 Element";
h2.setAttribute('id','subHeading');
h2.setAttribute('class','secondary');
document.body.appendChild(h2);
```
### JavaScript Selectors
1. document.querySelector('p'); -> return the first matched paragraph texts
2. document.querySelectorAll('p'); -> return all the matched paragraphs
3. document.getElementByIda('heading'); -> return single value
4. document.getElementsByClassName('txt'); -> return values as a collection