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

### Arrays as Objects
```javascript
var colors = [];
colors.push("red");
colors.push("Green");
colors.pop();
```
### Math Object
* Javascript has lot of buitl-in object, math object is one of those group
 > - **Math.ceil()** - rounds up to the closest integer 
 > - **Math.floor()** - rounds down to the closest integer 
 > - **Math.round()** - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 
 > - **Math.trunc()** - trims the decimal, leaving only the integer
> - **Math.pow(2,3)** - calculates the number 2 to the power of 3, the result is 8.
> - **Math.sqrt(16)** - calculates the square root of 16, the result is 4 
> - **Math.cbrt(8)** - finds the cube root of 8, the result is 2 
> - **Math.abs(-10)**- returns the absolute value, the result is 10 
> - **Logarithmic methods**: Math.log(), Math.log2(), Math.log10() 
> - Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.
> - **Trigonometric methods**: Math.sin(), Math.cos(), Math.tan(), etc.
> - **Math.Random()** - return random value between 0 and 0.99.
### Uniqueness of Strings in Javascript
* As we would iterate over array, in the same way we can iterate over string also.
```javascript
var name1 = "Thalapathy";
var name2 = "Vijay";
console.log(name1+name2); // Thalapathy vijay
console.log(name1.concat(name2));// Thalapathy vijay
//Plus operator in strings act as concatenation
```