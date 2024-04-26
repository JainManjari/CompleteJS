console.log(sum(4,5));
//console.log(s(10,19)); => eror
//console.log(sum2(10,2)); => error
// console.log(sum3(9,8)); => error

function sum(a,b)
{
    return a+b;
}

var sum2=function s(a,b)
{
    return a+b;
}

var sum3=function (a,b)
{
    return a+b;
}

console.log(sum2(4,10));  // function expressions helps us to prevent calling the function before it is defined
console.log(sum(9,8));
//console.log(s(3,9));  => error

