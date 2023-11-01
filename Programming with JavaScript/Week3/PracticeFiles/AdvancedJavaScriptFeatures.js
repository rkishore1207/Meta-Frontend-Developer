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