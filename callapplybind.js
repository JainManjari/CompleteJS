"use strict"

function checkthis() {
    console.log(this);
}

checkthis();   // undefined

checkthis.call({});  // {}

checkthis(1) // here 1 will be passed as argument
checkthis.call(1); // 1







let employee = {
    name:"manjari",
    checkThis:function() {
      // person this
      console.log("person this ", this);
  
      function checkThisAgain() {
        console.log("check this again ", this);
      }

      checkThisAgain();
    }
  }
  
  employee.checkThis();









employee = {
    name:"manjari",
    checkThis:function() {
      // person this
      console.log("person this ", this);
  
      function checkThisAgain() {
        console.log("check this again ", this);
      }

      checkThisAgain.call(this)  // or checkThisAgain.call({employee});
    }
  }
  
  employee.checkThis();



  let name = {
    firstName:"Manjari",
    lastName:"Jain"
  }


  function printFullName(arg1, arg2) {
    console.log(`firstName : ${this.firstName} and lastName: ${this.lastName} where arg1 is ${arg1} and arg2 is ${arg2}`);
  }

   // printFullName("1", "2");   // => will return error as this is not defined for printFullName(....)



  printFullName.call(name, "1", "2");

  printFullName.apply(name, ["1", "undefinedddd"]);




let a  = function() {
    console.log("coming from a ",this)
}.bind({});


employee = {
    checkA:a,
    checkThis:function() {
        console.log(this);
    }
}

employee.checkA();
employee.checkThis()





const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      console.log("person "+JSON.stringify(this));
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  
  person.fullName.bind(member);
  person.fullName.apply(new Object());
  
  
  let fullName = person.fullName.bind(member);
  
  console.log("bind "+fullName());
  
  
  // console.log("fullName this "+person.fullName());
  
  
  
  // /*
  
  // Precedence	Object
  // 1	bind()
  // 2	apply() and call()
  // 3	Object method
  // 4	Global scope
  
  // */


  