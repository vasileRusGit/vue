//////////////////////////////////////////////////////////////////////////// LECTURE 1 - OBJECTS
var customer = {
  name: 'Rus Vasile',
  // define an function in a object
  speak: function(){
    return "my name is "+ this.name;
  },

  // object in object
  address: {
    street: '123 Main St',
    city: "cluj"
  }
};

// add property to an object
customer.address.country = "romania";



//////////////////////////////////////////////////////////////////////////// CONSTRUCTOR
function Person(name, street){
  this.name = name;
  this.street = street;

  // define a function inside of an constructor
  this.info = function(){
    return "my name is "+ this.name + this.street;
  }
}

// accesing the constructor, create new object
var bob = new Person('Bob', 'cluj');

// check the type of the object
(bob instanceof Person);

// pass an object to a function
function changeName (person){
  person.name = 'Sue';
}
changeName(bob);



//////////////////////////////////////////////////////////////////////////// LECTURE 1 - PROTOTYPE
function Mamal (name){
  this.name = name;

  this.getInfo = function(){
    return this.name;
  }
}

Mamal.prototype.sound = 'grrrr';
Mamal.prototype.makeSound = function(){
  return this/name + ' says'  + this.sound;
}

var grover = new Mamal('Steve');

for(var prop in grover){
  console.log(prop + ' : ' + grover[prop]);
}




//////////////////////////////////////////////////////////////////////////// PRIVATE PROPERTIES
function secretCode(){
  var secretNum = 78;

  this.guessNum = function(num){
    if(num > secretNum){
      return "loewr";
    }else if(num < secretNum){
      return 'higher';
    }else{
      return 'You guess';
    }
  }
}

var secret  = new secretCode();




//////////////////////////////////////////////////////////////////////////// GET and SET
var Circle = function(radius){
  this._radius = radius;
}

Circle.prototype = {
  set radius(radius){
    this.radius = radius;
  },
  get radius(){
    return This._radius;
  },
  get Area(){
    return Math.PI * (this._radius * this._radius);
  }
}

var circ = new Circle(10);



//////////////////////////////////////////////////////////////////////////// INHERETANCE
function Animal(){
  this.name = "animal";

  this.toString = function(){
    return " my name is "+ this.name;
  }
}

function Canine(){
  this.name = "caine";
}

function Wolf(){
  this.name = 'Wolf'; 
}

Canine.prototype = new Animal();
Wolf.prototype = new Canine();

Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;

Animal.prototype.sound = 'Grrrrr Animal';
Animal.prototype.getSound = function(){
  return this.name + ' make sound like : ' + this.sound;
}

Wolf.prototype.sound = 'Grrrrr Wolf';

var arcticWolf = new Wolf();
console.log(arcticWolf.getSound);

// Call Parent Classes
function Vehicle (name){
  this.name = "vehicle";
}

Vehicle.prototype = {
  drive: function(){
    return this.name + ' drive';
  },
  stops: function(){
    return this.name + ' stops';
  }
}

function Truck(name){
  this.name = name;
}

Truck.prototype = new Vehicle();
Truck.prototype.constructor = Truck;

truck.prototype.drive = function(){
  // use the function defined in the Vehicle object class
  var driveMsg = Vehicle.prototype.drive.apply(this);
  // and add new functionality to that function
  return driveMsg += ' throuag a field';
}

var jeep = new Truck('Jeep');

//////////////////////////////////////////////////////////////////////////// DESIGN PATTERNS
// singleton - one obj of a specific type
function Hero(name){
  if(typeof Hero.instance == 'object'){
    return Hero.instance;
  }

  this.name = name;
  Hero.instance = this;
  return this;
}
// you can create just one instance of that object, just one object
var derekHero = new Hero('Derek');
console.log(derekHero.name);
var paulHero = new Hero('Paul');
console.log(paulHero.name);


// factory - generate diferent objects on request (dinamicly create objects)
function Sword(desc){
  this.weaponType = 'Sword';
  this.material = desc.material || 'Steel';
  this.style = desc.style || 'Longsword';
  this.hasMagic  = desc.hasMagic || false;
}

function Bow(desc){
  this.weaponType = 'Bow';
  this.material = desc.material || 'Wood';
  this.style = desc.style || 'Longbow';
  this.hasMagic  = desc.hasMagic || false;
}

function WeaponFactory(){}

WeaponFactory.prototype.makeWeapon = function(desc){
  var weaponClass = null;

  if(desc.weaponType === 'Sword'){
    weaponClass = Sword;
  }else if(desc.weaponType == 'Bow'){
    weaponClass = Bow;
  }else{
    return false;
  }

  return new weaponClass(desc);
}

var myWeaponFactory = new Weaponfactory();
var bladeFist = myWeaponFactory.makeWeapon({
  weaponType: 'Sword',
  material: 'Dark Iron',
  style: '',
  hasMagic: true
});

// decorator - allow to alter an object at run time
function Pizza(price){
  this.price = price || 10;
}

Pizza.prototype.getPrice = function(){
  return this.price;
}

function ExtraCheese(pizza){
  var prevPrice = pizza.price;

  pizza.price = prevPrice + 1;
}

var myPizza = new Pizza(10);
ExtraCheese(myPizza);
console.log(myPizza.price);

// observer - use a single object that notify many objects of a state changes accours
var Observable = fucntion(){
  this.subsriber = [];
}

Observable.prototype= {
  subscribe: function(subscriber){
    this.subscribers.push(subscriber);
  },

  unsubscribe: function(unsubscriber){
    for(i = 0; i < this.subscribers.length; i++){
      if(this.subscribers[i] === unsubscriber){
        this.subscribers.splice(i, 1);

        return unsubscriber.name;
      }
    }
  },

  publish: function(data){
    for(i=0; i < this.subscribers.length; i++){
      this.subscribers[i].receiveData(data);
    }
  }
};

var OrganFanny = {
  name: 'Organ Fanny',
  receiveData: function(data){
    console.log(this.name + ' received your info ' + data);
  }
}

var BoldmanYaks = {
  name: 'Boldman Yaks',
  receiveData: function(data){
    console.log(this.name + ' received your info ' + data);
  }
}