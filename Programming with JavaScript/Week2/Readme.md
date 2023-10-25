# Programming with JavaScript
## Week 2
### Functions in JavaScript
* Why we go for funtion is, we can reuse the piece of code as many time as we want, by just invoking it.
```javascript
function addTwoNumbers(){
    //body of the method
}
//Function Invoking
addTwoNumbers();
```
* And also function is flexible, that is we can execute the function with our desired values,
```javascript
function addTwoNumbers(a,b) //parameters
{
    var result = a+b;
    console.log(result);
}

//invoking
addTwoNumbers(3,5);//arguments
```
### Arrays in JavaScript
```javascript
var movies = ["Leo","Mersal","Mangatha","Sitha Ramam","Kaththi"];
console.log(movies[3]); //Sitha Ramam
```
### Objects in javascript
* Can hold different types of datatypes and it helps to declare variable with concise names.
* Access the every variable by **dot operator**.
* Variable inside the objects are `related` to each other and we can add or modify variables also by using dot operator.
* var variableName = {} -> called **string literal notation**.
```javascript
var leo = 
{
    //key-value pair
    actor:"vijay",
    director:"Lokesh",
    ratings:10,
    collections:1000,
    blockBuster:true
}

console.log(leo.actor);//vijay
```
```javascript
//Bracket Notation
var bike={};
bike["model"]="Bajaj";
bike["color"]="Black";
bike["cc"]=200;
```
* From the `bracket notation` we can populate the object and as well as print the object property by console.log(bike["model"]);