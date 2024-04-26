/*
   Splice (startI,count,Insertion elements) 
                        optional  
    It makes changes in the original array itself
*/

var a=[1,2,3,4,5,6];

console.log(a);


console.log(a.splice(1,1));

console.log("after splicing ",a);

console.log(a.splice(2,0,10));
console.log("after splicing ",a);

console.log(a.splice(2,2,11,25,"music"));
console.log("after splicing ",a);


// it doesnt make changes in the original error 
console.log("slicing "+a.slice(4,7));



console.log("after slicing ", a);