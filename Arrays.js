var a=[1,2,3,4];

console.log(a[9],a[2],a[-1],a["str"],a[0.6]);
console.log("a size "+a.length);
console.log("joining a1 ",a.join());
console.log(typeof(a));
console.log("isArray ",Array.isArray(a));

var a1=new Array(16,"",null,"string",undefined,"heloo");
console.log(a1[9],a1[2],a1[-1],a1["str"],a1[0.6], a1[0]);
console.log("a1 size "+a1.length);
console.log("a1 "+a1);
a1.sort(); // sort the array
console.log("after sorting a1 "+a1);

//empty array
var e1=[];
var e2=new Array();

//with size
var e3=new Array(3); // size of 3

// push : add elements to the end of array , it returns the new length of array
e3.push(10);
e3.push(11);
e3.push(12);
e3.push(13);

console.log(e3);


// it removes the last element from the array , it returns the removed element
console.log(e3.pop());

console.log(e3);

e3.reverse();
console.log(e3);

//removes the first element from array. It returns the removed the element
console.log(e3.shift()); 
console.log("after shifting e3 ",e3);

e3.unshift();
console.log("after unshifting e3",e3);

// unshift :  add elements to the first index
console.log(e3.unshift(12,14)); // returns new length of the array
console.log("after unshifting e3 with element 12 and 14",e3);

console.log(e3.indexOf("hello"),e3.indexOf(10));
