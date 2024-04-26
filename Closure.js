var i=10;

function outer()
{
    var i=11;
    var j=20;
    function inner()
    {
        var j=21;
        console.log("inner ",i,j);
    }
    inner();
    console.log("outer ", i,j);
}

outer();
console.log("global "+i);








// var i=10;

// function outer()
// {
//     var j=20;
//     console.log("outer ", i,j);
//     var inner=function()
//     {
//         var k=30;
//         console.log("inner ",j,k);
//     }
//     return inner;
    
// }

// var inner=outer();
// inner();




/*
    Here we are returing another function from a function. Technically all variables or functions call inside the "outer" function
    should have died out. As, it happen in other programming lanuages with a "return" statement.
    But in JS, even if we are returning another func "inner"
    from "outer", we are still able to preserve the variables of "outer" becus of CLOSURE. 
    
    CLOSURE: Func Call + Lexical Envirom

    Lexical Env refers to the physical storage of the function in the memory. It contains all the function variables, function calls
     and "this". "this" refers to the connection with the outer env;

     Here for "outer" => Lexical : var => j, inner
                                   this => global

     Here for "inner" => Lexical : var => k
                                   this => outer function      
*/













// var i=10;

// function outer()
// {
//     var j=20;
//     console.log("outer ", i,j);
//     var inner=function()
//     {
//         var k=30;
//         console.log("inner ",j,k);
//         k++;
//     }
//     return inner;
    
// }

// var inner=outer();
// inner();
// inner();







// var i=10;

// function outer()
// {
//     var j=20;
//     console.log("outer ", i,j);
//     var inner=function()
//     {
//         var k=30;
//         console.log("inner ",i,j,k);
//         k++;
//         j++;
//         i++;
//     }
//     return inner;
    
// }

// var inner=outer();
// inner();
// inner();
// outer();
// inner();







// var i=10;

// function outer()
// {
//     var j=20;
//     console.log("outer ", i,j);
//     var inner=function()
//     {
//         var k=30;
//         console.log("inner ",i,j,k);
//         k++;
//         j++;
//         i++;
//     }
//     return inner;
    
// }

// var inner=outer();
// inner();
// var inner=outer();
// inner();




