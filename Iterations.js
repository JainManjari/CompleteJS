var a=[1,2,3,4,5,6];

for(var i=0;i<a.length;i++)
{
    console.log(a[i]+" ");
}

console.log()

function print(element)
{
    console.log(element);
}

a.forEach(print);