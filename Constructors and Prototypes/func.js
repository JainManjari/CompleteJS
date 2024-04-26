// function Person(name)
// {
//     var obj={}// new Object();
//     obj.name=name;
//     return obj;
// }

// var p1=Person("mj");
// var p2=Person("rj");

// console.log(p1);

// console.log(p2);






// function Person(name)
// {
//     this.name=name;
// }

// var p1=Person("mj"); //undefined
// var p2=new Person("rj"); //"new"=> created new object and return it

// console.log(p1);

// console.log(p2);







// function Person(name)
// {
//     this.name=name;
//     this.getName=function()
//     {
//         console.log(this.name);
//     }
// }

// var p1=new Person("mj"); 
// var p2=new Person("rj"); 

// console.log(p1+" "+p1.getName());

// console.log(p2);

// /*
//    Here every obj of the function has the copy of the getName function, which leads to the total wastage of space.
//    In Java/C++, the objects of the class has copy of data members only
//    Hence, protoype
// */


// var x=20;

// const test=function()
// {
//     console.log(x); // error becuz cannot access x before initialization
//    let x=21;
// }

// test();





function add()
{
    return () => {return arguments[0]+arguments[1]};
}

console.log(add()(1,2,3));


const h={
    age:10,
    getAge:()=>{return this.age+=1}

}

h.getAge();
console.log(h.age)