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

//Implementing that three built in functions
function practiceKeysAndValues(){

    var dynamic;
    if(Math.random()>0.5)
        dynamic="speed";
    else
        dynamic="color";

    var bike ={
        speed:100,
        color:"Black"
    }

    console.log(bike[dynamic]);
}

practiceKeysAndValues();

//Difference Between For in loop and For of loop
function looops(){
    var car = {
        speed:100,
        color:"Blue",
        type:"HatchPack"
    }

    var sportzCar = Object.create(car);
    sportzCar.speed=200;

    for(var item in sportzCar){ // It will print both object and prototype's property
        console.log(item);
    }

    for(var item of Object.keys(sportzCar)){ // it will print only object's own property
        console.log(item+":"+sportzCar[item]);
    }
}
looops();

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
ObjectIntoArray();

//Map
var bikes = new Map();
bikes.set(1,"Pulsar");
bikes.set(2,"R15");
bikes.set(3,"Mt");
console.log(bikes);
//to print particular element
console.log(bikes.get(2));

//Set
var bikes = ["pulsar","R15","Mt","pulsar","gixxer","R15"];
var uniqueBikes = new Set(bikes);
console.log(uniqueBikes);

//Rest Operator
function calculateValues(tax,...rest){
    return rest.map(item => tax*item);
}
console.log(calculateValues(1.1,46,67,89,93));

//Spread Operator

//concatenation
var movies = ["leo","sarpatta parambarai"];
var films = ["asuran","beast"];
var cinemas = [...movies,...films];
console.log(cinemas);
var bikes ={
    speed:100,
    color:"Black"
}
var car ={
    speed:150,
    Model:"Benz"
}
console.log({...bikes,...car});//if both the object have same properties then it will take the second object's property

//Add new elements
var newCinemas = [...movies,"Mersal","Kaththi"];
console.log(newCinemas);

//String to array
var name = "Kishore";
console.log([...name]);

//Copy one object into other
var newBike = {...bikes};
console.log(newBike);

const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);
