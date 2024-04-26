// curry func
function area(length)
{
    return function(breadth) {
        return function(height){
            return length*breadth*height;
        }
    }
}

console.log(area(5)(4)(10));



/*


A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. 
It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.
Also a pure function does not produce any observable side effects such as network requests or data mutation etc.

Let’s see the below JavaScript Function:


*/


function calculateGST( productPrice ) {
    return productPrice * 0.05;
}




//high order functions

/*

The functions that use other functions as arguments or return functions are named higher-order functions.

*/

