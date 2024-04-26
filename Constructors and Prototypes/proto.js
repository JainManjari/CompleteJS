/*
  Every func has the "prototype" property in it. Every objects of the func has internal refer to the "prototype"
  We can access prototype by ClassName.prototype or FuncName.prototype
  and go back to class by ClassName.prototype.constructor

*/


function Person(name)
{
    this.name=name;
}

Person.prototype.getName=function() // same for the getName func *
{
        return this.name;
}

Person.prototype.lastName="jain"; // here all objects will have lastName as Jain but it will not be reflected in their actual obj body *

console.log("proto "+JSON.stringify(Person.prototype));

console.log("func "+Person.prototype.constructor);



var p1=new Person("mj"); 
var p2=new Person("rj"); 


console.log(p1);
console.log(p1.getName()+" "+p1.lastName); // here p1 will try to look for lastName in its body, it not found, go check parent prototype (chaining: go back to its grandparents if inheritance), if not found, return undefined

console.log(p2);



// See, now that the objects doesn;t have getName function or lastName data member in their data members


// console.log(p1.__proto__); // every object's prototype => dunder prototype => this is discouraged

// console.log(p2.__proto__===Person.prototype);


console.log(Object.getPrototypeOf(p1));

console.log(Object.getPrototypeOf(p2)==Person.prototype);

console.log(Person.prototype.isPrototypeOf(p1));
console.log(Person.prototype.isPrototypeOf(p2));


console.log("Does p1 has name prop? "+p1.hasOwnProperty("name")); // p1 has the Name property in its body => true
console.log("Does p1 has getName prop? "+p1.hasOwnProperty("getName")) //false


p1.lastName="Vashist"; // by doing this, we have added the "lastName" prop in the p1 body

console.log(p1);
console.log(Object.getPrototypeOf(p1));

console.log(p2);

console.log(p1.hasOwnProperty("lastName"));
console.log(p2.hasOwnProperty("lastName"));


/*


var obj=new Object();
var p1=new Person();
p1===> Person.Prototype ===> Object.Prototype 

Chaining

*/