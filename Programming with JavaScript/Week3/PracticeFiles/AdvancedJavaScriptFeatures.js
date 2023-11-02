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
