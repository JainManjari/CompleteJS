/*

  var is function scoped and let is block scoped. 
  It can be said that a variable declared with var is defined throughout the program as compared to let.


*/



console.log("before initial var a1 "+a1);
var a1 = 10
// User can re-declare
// variable using var
var a1 = 8

// User can update var variable
a1 = 7

console.log("var a1 "+a1);




//console.log("error let a3 "+a3);
let a3 = 10
 
// It is not allowed
//let a = 12
 
// It is allowed
a3 = 15

console.log("let a3 "+a3);



let a4;
a4=90;
console.log("let a4 "+a4);



function f() {
 
    // It can be accessible any
    // where within this function
    var a2 = 10;
    console.log("inside func var a2 "+a2)
}
f();

// A cannot be accessible outside of function
// console.log(a2); // error





var x3=20;

const test=function()
{
    console.log(x3); // error becuz cannot access x before initialization
   let x3=21;
}

test();






var a=10;
console.log("var abc "+a,b,c);
if(a<=10)
{
    console.log("var b "+b);
    var b=20;
}
else
{
    var c=30;
}

console.log("var abc "+ a,b,c);








for(var i=1;i<=5;i++)
{
    setTimeout(function()
    {
        console.log("var "+i); //=> 6,6,6,6,6
    },1000);
}



for(let i=1;i<=5;i++)
{
    setTimeout(function(){
        console.log("let "+i); //=> 1,2,3,4,5
    },1000);
}



