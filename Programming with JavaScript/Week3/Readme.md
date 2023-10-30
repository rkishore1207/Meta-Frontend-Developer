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