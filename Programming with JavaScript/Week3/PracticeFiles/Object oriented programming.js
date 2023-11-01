//Functional Programming
var shoe = 100;
var tax = 1.2;
function calculatePrice()
{
    var totalPrice = shoe*tax;
    console.log(totalPrice);
}
calculatePrice();

//Object Oriented Programming
var purchase={
    shoe:100,
    tax:1.5,
    calculatePrice: function(){
        var totalPrice = purchase.shoe*purchase.tax;
        console.log(totalPrice); 
    }
}

purchase.calculatePrice();

//OOps with this keyword
var purchase={
    shoe:100,
    tax:1.5,
    calculatePrice: function(){
        var totalPrice = this.shoe*this.tax;
        console.log(totalPrice); 
    }
}

purchase.calculatePrice();

//Inheritance
var bird ={
    hasWings:true,
    canFly:true,
    hasFeathers:true
}

var bird1=Object.create(bird);// it will have the bird object as inherited
console.log(bird1);
console.log("bird1 has wings:",bird1.hasWings);
console.log("bird1 can fly:",bird1.canFly);
console.log("bird1 has feathers:",bird1.hasFeathers);
console.log(bird1);

var bird2 = Object.create(bird);
bird2.canFly=false;
console.log(bird2);

//Inheritance with constructor concepts
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log("Self",this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log("Prototype",proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() { //overriding the super-class function and added something new
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
console.log("Train4",train4);// It will just print Properties not the functions

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

train5.getPrototype(); 
highSpeed1.getPrototype();

//Implementing 
class Animal
{
    constructor(color,energy)
    {
        this.color=color,
        this.energy=energy
    }
    isActive()
    {
        if(this.energy>0)
        {
            this.energy-=20;
            console.log("Energy is:",this.energy);
        }
        else if(this.energy==0)
        {
            this.sleep();
            console.log("Energy is:",this.energy);
        }
        else
        {
            console.log("Energy is already zero you cannot run the animal");
        }
    }
    sleep()
    {
        this.energy+=20;
        console.log("Sleeping");
    }
    getColor(){
        console.log(this.color);
    }
}

class Cat extends Animal{
    constructor(sound,canJumpHigh,canClimbTree,color,energy){
        super(color,energy);
        this.sound=sound;
        this.canClimbTree=canClimbTree;
        this.canJumpHigh=canJumpHigh;
    }
    makeSound(){
        console.log("meow");
    }
}

class Bird extends Animal{
    constructor(sound,canFly,color,energy){
        super(color,energy);
        this.sound=sound;
        this.canFly=canFly;
    }
    makeSound(){
        console.log("chirpps");
    }
}

class HouseCat extends Cat{
    constructor(houseCatSound,sound,canJumpHigh,canClimbTree,color,energy){
        super(sound,canJumpHigh,canClimbTree,color,energy);
        this.houseCatSound=houseCatSound;
    }
    makeSound(){
        if(this.sound=="meow")
            console.log("Sound of Parent:",super.makeSound());
        console.log("Housemeow");
    }
}

class Tiger extends Cat{
    constructor(tigerSound,sound,canJumpHigh,canClimbTree,color,energy){
        super(sound,canJumpHigh,canClimbTree,color,energy);
        this.tigerSound=tigerSound;
    }
    makeSound(){
        if(this.sound=="meow")
            console.log("Sound of Parent:",super.makeSound());
        console.log("tigerSound");
    }
}

class Parrot extends Bird{
    constructor(canTalk,sound,canFly,color,energy){
        super(sound,canFly,color,energy);
        this.canTalk=canTalk;
    }
    makeSound(){
        super.makeSound();
        console.log("kikikiki");
    }
}

var polly = new Parrot(true,"talkingggggg",true,"Green",0);
polly.makeSound();
polly.isActive();