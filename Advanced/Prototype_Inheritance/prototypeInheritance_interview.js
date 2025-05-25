// todo 1. Create a Custom Inheritance Chain

// function Animal(name){this.name = name;}
// Animal.prototype.speak = function (){
//     console.log("Animal Speaks");
// }

// function Dog(name){
//     Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.speak = function (){
//     Animal.prototype.speak.call(this);
//     console.log(`${this.name} Barks`);
// }

// const dog = new Dog("Bagha");
// dog.speak();
// console.log(dog.__proto__.hasOwnProperty("speak"));

// todo 2. Simulate new Keyword Behavior
// *Problem:
// *Write a function myNew that works like the new operator.

// function myNew(constructor, ...args){
//     const obj = {};
//     Object.setPrototypeOf(obj, constructor.prototype);
//     const result = constructor.apply(obj, args);
//     return result instanceof Object ? result : obj;
// }
// function Person(age, name){this.name = name; this.age = age;}
// Person.prototype.walk = function (){
//     console.log(`${this.name}, is walking. He is ${this.age} years old.`);
// }

// const p = myNew(Person, 45, "Naeem");
// p.walk();

// todo 3. Check if a Property Is Inherited or Own Property

//* Problem:
//* Write a function isInherited(obj, prop) that returns true if the property is inherited (not an own property).

// function isInherited(obj, prop){
//     let proto = Object.getPrototypeOf(obj);
//     while(proto){
//         if(proto.hasOwnProperty(prop)) return true;
//         proto = Object.getPrototypeOf(proto);
//     }
//     return false;
// }

// function isInherited2(obj, prop){
//     return prop in obj && !obj.hasOwnProperty(prop);
// }

// function A() {}
// A.prototype.sayHi = () => {};

// const a = new A();
// console.log(isInherited2(a, "sayHi")); // true

// todo 4. Manually Implement Object.create()
//* Problem:
//* Write your own version of Object.create(proto).

// const myCreate = (proto)=>{
//     if(typeof proto !== 'object' && typeof proto !== 'function' && proto !== null){
//         throw new TypeError('Object prototype may only be an object or null');
//     }

//     function F(){};
//     F.prototype = proto;
//     return new F();
// };

// const parent = { greet() { return "Hello"; } };
// const child = myCreate(parent);
// console.log(child.greet()); // "Hello"

// todo 5. Prototype Method Chain Overriding
//* Problem:
//* Create a base class Vehicle with a method move(). Then create a subclass Car that overrides move() and calls the parent method as part of its own.

// class Vehicle{
//     move(){
//         return "Vehicle is moving.";
//     }
// }

// class Car extends Vehicle{
//     move(){
//         return `${super.move()} Car is driving fast.`;
//     }
// }

// const car = new Car();
// console.log(car.move());

// todo 6. Check the Prototype Chain Ends at Object.prototype
//* Problem:
//* Write a function endsWithObjectPrototype(obj) that returns true if the end of the prototype chain is Object.prototype.

// const endsWithObjectPrototype = (obj)=>{
//     if(obj === null || (typeof obj !== 'object' && typeof obj !== 'function'))
//         return false;
    
//     let prevObj = null;
//     while(obj){
//         prevObj = obj;
//         obj = Object.getPrototypeOf(obj);
//     }

//     return prevObj === Object.prototype;
// };

// function Person() {}
// const p = new Person();
// console.log(endsWithObjectPrototype(p)); // true
// console.log(endsWithObjectPrototype({}));// true
// console.log(endsWithObjectPrototype(null));            // false
// console.log(endsWithObjectPrototype(42));              // false
// console.log(endsWithObjectPrototype(() => {}));        // true
// console.log(endsWithObjectPrototype(Object.create(null))); // false

// todo 7. Add Polyfill for Array.prototype.myMap()
//* Problem:
//* Implement your own version of Array.prototype.map() using prototype.

// Array.prototype.myMap = function(callback, thisArg) {
//   if(this == null){
//     throw new TypeError('Array.prototype.myMap is called on null or undefine');
//   }

//   if(typeof callback !== 'function'){
//     throw new TypeError(callback + ' is not a function');
//   }

//   const O = Object(this);
//   const len = O.length >>> 0;
//   const result = new Array(len);

//   for(let i = 0; i < len; i++){
//     if(i in O){
//         result[i] = callback.call(thisArg, O[i], i, O);
//     }
//   }

//   return result;
// };

// const arr = [1, 2, 3].myMap(x => x ** 10); // [10, 20, 30]
// console.log(arr);

// todo 8. Deep Prototype Chain Traversal
//* Problem:
//* Write a function getPrototypeDepth(obj) that returns how deep the prototype chain goes before hitting null.

// const getPrototypeDepth = (obj)=>{
//     if(obj === null || (typeof obj !== 'object' && typeof obj !== 'function')){
//         throw new TypeError(obj + ' is not a object or function');
//     }

//     if(typeof obj === 'function')obj = obj.prototype;

//     let depth = 0;
//     while(obj){
//         depth++;
//         obj = Object.getPrototypeOf(obj);
//     }

//     return depth;
// };

// function A() {}
// function B() {}
// B.prototype = new A();
// const b = new B();

// console.log(getPrototypeDepth(b));

// const obj = {};
// console.log(getPrototypeDepth(obj)); // Output: 2 (obj → Object.prototype → null)

// todo 9. Fake class Keyword with Prototypes
//* Problem:
//* Without using class, simulate inheritance between two constructor functions, including method overriding and super-like behavior.

// function Animal(name){ this.name = name; }
// Animal.prototype.sayHi = function(){
//     return `${this.name} makes a noise.`;
// };

// function Dog(name){
//     Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.sayHi = function(){
//     const parentMsg = Animal.prototype.sayHi.call(this);

//     return `${parentMsg} ${this.name} barks.`
// }

// const d = new Dog("Bruno");
// console.log(d.sayHi());

// todo 10. Static and Private property

// function Animal(name) {
//   let sound = "some noise"; // private
//   this.name = name;

//   this.getSound = function() {
//     return sound;
//   };
// }
// Animal.prototype.sayHi = function() {
//   return `${this.name} makes a noise.`;
// };

// // static method
// Animal.kingdom = function() {
//   return "Animalia";
// };
// Animal.staticPro = "Kita Khabor Ghumao"

// function Dog(name) {
//   Animal.call(this, name);
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.sayHi = function() {
//   return `${Animal.prototype.sayHi.call(this)} ${this.name} barks.`;
// };

// // 🧪 Test
// const d = new Dog("Rocky");
// console.log(d.sayHi());           // "Rocky makes a noise. Rocky barks."
// console.log(d.getSound());        // "some noise"
// console.log(Animal.kingdom(), Animal.staticPro);    // "Animalia"

//todo 11. Override Method Only for One Instance
//* Problem:
//* Create two instances from the same constructor. Override a prototype method only for one instance without affecting the other.

// function Person(name){
//     this.name = name;
// }
// Person.prototype.greet = function (){
//     return `Hello, I'm ${this.name}. From Person`;
// }

// const a = new Person("Sohag");
// const b = new Person('Faizul');

// console.log(a.greet(), " --- ", b.greet());

// a.greet = function(){
//     return `Hi, I'm ${this.name}. From instance a`;
// }
// console.log(a.greet());

// todo 12.Freeze the Prototype Chain
//* Problem:
//* Write a function freezePrototype(obj) that freezes all prototype levels up to Object.prototype.

function freezePrototype(obj){
    const seen = new WeakSet();

    while(obj && obj !== Object.prototype){
        if(!seen.has(obj)){
            Object.freeze(obj);
            seen.add(obj);
        }
        obj = Object.getPrototypeOf(obj);
    }

    Object.freeze(Object.prototype);
}

function Animal() {
  this.type = "animal";
}

Animal.prototype.speak = function () {
  console.log("Animal sound");
};

function Dog() {
  Animal.call(this);
  this.breed = "Labrador";
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log("Woof!");
};

const dog = new Dog();

// Freeze everything in the prototype chain
freezePrototype(dog);

// Try modifying prototypes
dog.__proto__.bark = () => console.log("Changed!"); // ❌ fails silently in non-strict
console.log(dog.__proto__.bark); // Still original

// Try modifying Animal.prototype
Animal.prototype.speak = () => console.log("Changed!"); // ❌

console.log(Object.isFrozen(Animal.prototype)); // true
console.log(Object.isFrozen(Dog.prototype)); // true
