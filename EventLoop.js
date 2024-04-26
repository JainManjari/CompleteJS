function func()
{
    console.log("X");
    setTimeout(()=>console.log("Y"),7);
    setTimeout(()=>console.log("Z"),0);
    console.log("A");
}
func();
console.log("B");