// function Passbyvalue(a, b) {
//     let tmp;
//     tmp = b;
//     b = a;
//     a = tmp;
//     console.log(`Inside Pass by value 
//         function -> a = ${a} b = ${b}`);
// }
  
// let a = 1;
// let b = 2;
// console.log(`Before calling Pass by value 
//         Function -> a = ${a} b = ${b}`);
  
// Passbyvalue(a, b);
  
// console.log(`After calling Pass by value 
//        Function -> a =${a} b = ${b}`);










//        function PassbyReference(obj) {
//         let tmp = obj.a;
//         obj.a = obj.b;
//         obj.b = tmp;
    
//         console.log(`Inside Pass By Reference
//             Function -> a = ${obj.a} b = ${obj.b}`);
//     }
    
//     let obj = {
//         a: 10,
//         b: 20
    
//     }
//     console.log(`Before calling Pass By Reference
//         Function -> a = ${obj.a} b = ${obj.b}`);
    
//     PassbyReference(obj)
    
//     console.log(`After calling Pass By Reference
//         Function -> a = ${obj.a} b = ${obj.b}`);
    






// function PassbyReference(obj) {

//         // Changing the reference of the object
//         obj = {
//             a: 10,
//             b: 20,
//             c: "GEEKSFORGEEKS"
//         }
//         console.log(`Inside Pass by
//             Reference Function -> obj `);
            
//         console.log(obj);
// }
    
//     let obj = {
//         a: 10,
//         b: 20
    
//     }
//     console.log(`Updating the object reference -> `)
//     console.log(`Before calling Pass By
//             Reference Function -> obj`);
//     console.log(obj);
    
//     PassbyReference(obj)
//     console.log(`After calling Pass By
//             Reference Function -> obj`);
//     console.log(obj);
    






//     function PassbyReference(obj) {

//         // Mutating the origanal object
//         obj.c = "GEEKSFORGEEKS";
//         console.log(`Inside Pass by
//             Reference Function -> obj `);
//         console.log(obj);
//     }
    
//     let obj = {
//         a: 10,
//         b: 20
    
//     }
//     console.log(`Mutating the origanal object -> `)
//     console.log(`Before calling Pass By
//             Reference Function -> obj`);
//     console.log(obj);
    
//     PassbyReference(obj)
//     console.log(`After calling Pass By
//             Reference Function -> obj`);
//     console.log(obj);
    


function passByRef(arr) {
    //arr[0]="one";   //-- 1   

    // arr = ["45","10"];  //-- 2

    arr.push("raghav"); // -- 3
    arr = arr.slice(2,4);
    console.log("func "+arr);

}

const arr =[1,2,3];

console.log(arr);

passByRef(arr);

console.log(arr);