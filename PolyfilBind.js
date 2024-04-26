/*

In web development, a polyfill is code that implements a feature on web browsers that do not support the feature. 

*/



let myObj = {
    "name":"Captain",
    "work":"Engineer"
}

let printObj = function () {
    console.log(this.name +" "+ this.work);
}

let printObjBind = printObj.bind(myObj);

printObjBind();


// this myBind2 should be available to all objs of JS, hence using function.prototype
Function.prototype.myBind2 = function(...args) {

    let obj = this;
    let params = args.slice(1);
    console.log("params" , params);
    return function(...args2) {
        console.log("args2 ", args2);
        obj.apply(args[0], [...params, ...args2]);
    }

}


let printObj2 = function(...args) {
    //console.log("printObj2 "+args);
    console.log("printobj2 "+this.name+" "+this.work);
    for (let ele of args) {
        console.log(ele);
    }
}

let printObj2MyBind= printObj2.myBind2(myObj, "p1","p2");

printObj2MyBind("p3","p4");
