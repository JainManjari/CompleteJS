var count=10;

setTimeout(timer, 30, "settimeout");

setTimeout(timer, 30, "settimeout");

setTimeout(timer, 30, "settimeout");

function timer(a)
{
    console.log(count+" "+a);
    count--;
    if(count==0)
    {
        console.log("Time up!");
        clearInterval(id);
        //return;
    }
}

var id=setInterval(timer,20, "setInterval");


