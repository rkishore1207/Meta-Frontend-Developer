var randomNumber = Math.random();
console.log(randomNumber);
var rounded = Math.ceil(randomNumber*10);
console.log(rounded);

//Some of the built-in functions
console.log("ho-ho-ho".indexOf('h'));
console.log("ho-ho-ho".lastIndexOf('h'));
var name = "Kishore";
console.log(name.charAt(0));
console.log("ho-ho-ho".split('-'));

//Object Methods
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey(); //Invoking the method to be print
car.lightsOn();

//TypeOf
console.log(typeof("Phanindra"));
console.log(typeof(45>56));//Boolean
console.log(typeof([1,2,3]));//object
console.log(typeof({color:"red"}));//object
console.log(typeof(function print(){console.log("Hello world")}));//function

//Try Catch Block
try{
    // console.log(a+b);
    throw new ReferenceError();
}
catch(err)
{
    console.log("There exists error");
}
console.log("Program will not stop");

//Range Error
try{
var number=(10).toString(45);
}
catch(err)
{
    console.log("Range Error occured");
}
console.log(number);



