// const flattenArray = (arr) =>{

//     arr.reduce((prevV, currV)=>{
//         return prevV.concat(Array.isArray(currV) ? flattenArray(currV) : currV)
//     }, [])
// }

// console.log(flattenArray([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]))



function flatten(arr) {
    return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
};
 
const arr = [[1,2],[3,[4,[5]]]];
 
const flattened = flatten(arr);
console.log(flattened);