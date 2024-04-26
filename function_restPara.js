function sumOfAtLeast3(a,b,c,...numbers)
{
    var sum=a+b+c;
    for(var i=0;i<numbers.length;i++)
    {
        sum+=numbers[i];
    }
    return sum;
}

console.log(sumOfAtLeast3(2,3));
console.log(sumOfAtLeast3(2,3,5));
console.log(sumOfAtLeast3(2,3,5,65,43,-10));