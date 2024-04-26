//new feature of ecmascript6 => es6

/*

Cannot be reassigned.
Block Scope
It can be assign on the variable on declaration line.
Primitive value.
The property of a const object can be change but it cannot be changed to refer to the new object
The values inside the const array can be change, it can add new items to const arrays but it cannot refer to a new array.
Re-declaring of a const variable inside different block scope is allowed.
Cannot be Hoisted.
Create only read only reference to value.

*/




// const x=13;
// x+=1;
// console.log(x); //=> error because we can;t reassigned value

// const temp="hello";
// temp="noo";
// console.log(temp); //=> error because we can;t reassigned value






// const x=22;

// {
//     const x=44;
//     console.log(x);

//     {
//         const x=55;
//         console.log(x);
//     }
// }

// console.log(x);  // in each block scope, const variable can be redefined







// const x;
// x=13;
// console.log(x); //=> error initialization should happen right along






// x=3;
// console.log(x);
// const x; //=>error : const hoisting not available







const arr=["hello",2,3,4];
arr[0]="tyy";
console.log(arr[0]);

//arr=["pop"];  // error: array can't be reaasigned to new array
//const arr=["pop"] // error: array can't be reaasigned to new array


const student={
    "name":"mj",
    "roll":"22",
    "dob":"16-10-1998"
}

//changing value
student["name"]="music";
//adding new key
student["work"]="engineer";

console.log(student.name);


student["name2"]=student["name"];
//removng old key
delete student["name"]

console.log(JSON.stringify(student));

// const student={
//     "music":"songs"
// } //error=> obj can't be reassigned to new obj