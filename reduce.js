const num=[2,10,9,10,111];


const sum = num.reduce((prevV, currV)=>{
    return prevV+currV
}, 0 ) // setting the previous value to 0


console.log(sum);


const maxNum = num.reduce((prevV, currV)=>{
    return Math.max(prevV, currV)
}, -1) // setting the previous value to 0


console.log(maxNum+" ");



let obj = [
    {
        "name":"A",
        "last":"G",
        "age":10
    },
    {
        "name":"B",
        "last":"V",
        "age":10
    },
    {
        "name":"C",
        "last":"H",
        "age":0
    },
    {
        "name":"D",
        "last":"P",
        "age":7
    },
    {
        "name":"6",
        "last":"G",
        "age":9
    }


]

// ["a g", "b v", "c h",...]
const fullNames = obj.map((item)=>{
    //console.log("fullName "+JSON.stringify(item));
    return item["name"]+" "+item.last
})

console.log(fullNames);




// {10:2, 0:1,7:1...}
const ageFreq = obj.reduce((prevV, currV)=>{
    if(prevV[currV.age]) {
        prevV[currV.age]=++prevV[currV.age];
    } else
    {
        prevV[currV.age] = 1
    }
    return prevV;
}, {})


console.log(ageFreq);

const double = num.map((item )=>item*2);

console.log(double);


const binary = num.map((item )=>item.toString(2));

console.log(binary);


const isEven = num.filter((item)=>item%2==0);

console.log(isEven);





