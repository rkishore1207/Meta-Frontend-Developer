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