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
* The variable that is declared outside of funtion is having Global scope and can accessible to wherever in the program.
* And the variable that is declared within the funtion is have local scope or Function scope and cannot access outside of the function.