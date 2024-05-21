/*** this is not a variable. It is a keyword. You cannot change the value of this. */

//without using 'use strict'

// function demo()
// {
//     console.log(this); //window obj
// }

// demo();

// var demo2=function()
// {
//     console.log(this);//window obj
// }

// demo2();

// var obj={
//     "name":"mj",
//     "print":function()
//      {
//          console.log(this); //obj obj
//      }
// }

// obj.print();


let employee = {
  name:"manjari",
  checkThis:function() {
    // person this
    console.log("person this ", this);

    function checkThisAgain() {
      this.name = "mj";
      console.log("check this again ", this);
    }

    // will print window this because this person is not bind with anything
    checkThisAgain();
    // window.name  will be equal to "mj" but this.name would be undefined
    console.log("print name after checkthisAgain",this.name);
  }
}

employee.checkThis();

const func = employee.checkThis;
func();







// // with using 'use strict'
// 'use strict' // ensures that this is confined to its own block scope

// //console.log("strict "+JSON.stringify(this));
// function demo(a,b)
// {
//     console.log("demo "+JSON.stringify(this)+" "+a+" "+b); //undefined
// }

// demo();

// var demo2=function()
// {
//     console.log("demo2 "+JSON.stringify(this));//undefined
// }

// demo2();

// var obj={
//     "name":"mj",
//     "print":function()
//      {
//          console.log("obj "+JSON.stringify(this)); //obj obj
//      }
// }

// // obj.print();

// // obj.print.bind(demo);

// // demo(); // undefined, undefined, undefined

// //to bind functions to default this value

// demo.apply(obj);
// //console.log("demo applying ",demo());
// demo.call(obj);

// // //if func has parameters
// demo.apply(obj,[3,4]);
// demo.call(obj,3,4);




// /*


// With the bind() method, an object can borrow a method from another object.
// This example creates 2 objects (person and member).
// The member object borrows the fullname method from the person object:


// */


// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     console.log("person "+JSON.stringify(this));
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }


// person.fullName.apply(new Object());
// person.fullName.bind(member);

// let fullName = person.fullName.bind(member);

// console.log("bind "+fullName());


// console.log("fullName this "+person.fullName());



// /*

// Precedence	Object
// 1	bind()
// 2	apply() and call()
// 3	Object method
// 4	Global scope

// */