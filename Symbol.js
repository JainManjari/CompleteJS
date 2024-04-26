/*

Symbols are immutable (cannot be changed) and are unique


*/

var sym1= Symbol("key1");
var sym2=Symbol("key1");

console.log(sym1);
console.log(sym1.description);
console.log(sym1===sym2) //false


/**
 * 
 * symbols are not used in for loop
 */


 let idenity = Symbol("id");

 let person = {
     name: "Jack",
     age: 25,
     [idenity]: 12
 };
 
 // using for...in
 for (let key in person) {
     console.log("key ",key);
 }

console.log("person "+JSON.stringify(person));

// Now we introduce Symbol. This can help us make a property private without using extra unnecessary closures. Code example below:
person[idenity]=23;


console.log("person "+JSON.stringify(person));


 // get symbol by name
let sym3= Symbol.for('hello');
let sym4 = Symbol.for('id');

// get name by symbol
console.log( Symbol.keyFor(sym3) ); // hello
console.log( Symbol.keyFor(sym4) ); // id






var Pet = (function() {
  var typeSymbol = Symbol('type');
  function Pet(type) {
    this[typeSymbol] = type;
  }
  Pet.prototype.getType = function(){
    return this[typeSymbol];
  }
  return Pet;
}());

var a = new Pet('dog');
console.log(a.getType());//Output: dog
a.type = null;
//Stays private
console.log(a.getType());//Output: dog