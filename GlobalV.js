// var name="script1";

// setTimeout(function(){
//     console.log(name); // script2
// },1000);

// var name="script2";

// console.log(name); // script2



// solution 1
// function print1()
// {
//     var name="script1";

//     setTimeout(function(){
//         console.log("sol1 "+name);
//     },1000);
// }

// print1();

// function print2()
// {
//     var name="script2";
//     console.log("sol1 "+name);
// }

// print2();

// here this is also not an optimal solution becuz functions can also have same name and it can still over write





// solution 2
// {
//     let  name="script1";

//     setTimeout(function(){
//         console.log("sol2 "+name);
//     },1000);
// }



// {
//     let name="script2";
//     console.log("sol2 "+name);
// }

//The accessibility of let is defined within its scope









// solution 3 IIFE Immediate Invoke Function Expression
(function(){
    let  name="script1";

    setTimeout(function(){
        console.log("sol3 "+name);
    },1000);
})();



(function(){
    let name="script2";
    console.log("sol3 "+name);
})()
