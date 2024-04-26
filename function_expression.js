var add=function(a,b) //anonymous func
{
    return a+b;
}

console.log(add(5,6));

var sub=function(a,b) //anonmyous func
{
    return a-b;
}

var opt=function(func)
{
    var x=2;
    var y =5;
    return func(x,y);
}

console.log(opt(add));
console.log(opt(sub));

//non anymous function
 var mutliply=function mul(a,b)
 {
     return a*b;
 }

 //console.log(mul); => error
 console.log(mutliply(7,2));

function multi(a,b)
{
    return a*b;
}

function ab(a,b,compute)
{
    return compute(a,b);
}

console.log(ab(10,2,multi)) // normal func


console.log(ab(10,2,mutliply)) // non anonymous


console.log(ab(10,2,add)) // anonymous