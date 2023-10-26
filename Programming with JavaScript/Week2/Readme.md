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
### Object Methods
* We can add Functions() to the object also and that function is referred as `Methods`.
* Eg, **log()** is the method that present in the console object.
* If you print the object that has method, it wont't print the body of the method because we couldn't invoke them, hence it print as [Function (Anonymous)].
```javascript
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
console.log(car);
```
### Errors and Bugs
* While executing code we expect something but we would get **something different** that is called `Bugs`.
* If the code have bugs it runs completely but perform in a **different way**.
```javascript
function addTwoNumbers(a,b)
{
    console.log(a+b);
}
addTwoNumbers('1'+2);
//We expect arthmetic operation to be done but here we got '12' as the output
```
* If the program stuck somewhere and thrown some unexpected behaviour called `Error`.
* There are three types of error,
    1. Type error
    2. Reference error
    3. Syntax error -> ("hello)
    4. Range Error
* If the value is not defined or declared but we tend to use that is Reference error.
* (5).pop -> Type Error
### Try Catch
* If we use try and catch block even if our code throw error also our program execution will not stop.
* If any error thrown by try block, the catch block will catch that and the program also executing properly.
* `Syntax error is not caught in try catch block`.
* If you execute one data type functionality into the other data type there exist `typeError`.
* If you give out of Range number for a fucntion it will throw Unexpected Range error.
```javascript
//Range Error
var number=(10).toString(2);
console.log(number); //1010
console.log((10).toString(45))//throw an error
```
### Null, Undefined and Empty String
* If one variable expects something but if it **doesn't get** anything it will return `null`.
* Declared one variable without initialization and prints that, it will give `undefined`.
* Try to access one of the property that doesn't present in the object, that also give `undefined`.