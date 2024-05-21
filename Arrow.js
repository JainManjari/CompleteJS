// function Person(personName)
// {
//     this.personName=personName;
//     console.log("func "+this.personName);  // => Person obj

//     setTimeout(function()
//     {
//         console.log("sto "+this.personName); // window obj
//     },1000);
// }

// var p=new Person("Batman");

/*


let Person = () => {

}

var p = new Person(); // error=> cant use new keyword with constructor function


*/



// function Person(personName)
// {
//     this.personName=personName;
//     console.log("func "+this.personName);  // => Person obj

//     setTimeout(()=>
//     {
//         console.log("sto "+this.personName); // Person obj => arrow func has no binding, its take the binding of its outer env
//     },1000);
// }

// var p=new Person("Batman");




//Whatever `this` is here...
var chopper = {
    owner: 'Zed',
    getOwner: () => {
        console.log("calling getowner "+JSON.stringify(this));
        return this.owner;    // ...is what `this` is here.
        // undefined
    }
    
};

// suitable
// var chopper = {
//     owner: 'Zed',
//     getOwner: function () {
//         console.log("calling getowner "+JSON.stringify(this));
//         return this.owner;    // ...is what `this` is here.
//         // undefined
//     }
    
// };

/// use default function inside an obj and call arrow functions inside the default function of the obj
// to get the right this

console.log("chopper "+chopper.getOwner()+" "+chopper.owner);