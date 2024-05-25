let firstBox = document.getElementById("first-box");

let secondBox = document.getElementById("second-box");

let thirdBox = document.getElementById("third-box");


// firstBox.addEventListener("click", e=>{
//     console.log("first box clicked")
// });


// secondBox.addEventListener("click", e=>{
//     console.log("second box clicked")
// });


// thirdBox.addEventListener("click", e=>{
//     console.log("third box clicked")
// });

// document.addEventListener("click", e=>{
//     console.log("dom clicked");
// });

/**
 * 
 * 
 * here when we click on third box, then
 * output
 * third box clicked
 * second clicked
 * first box clicked
 * documnet clicked
 * 
 * 
 * as third box is inside second box and second bx inside first box
 * and first box inside dom
 * this is knows as event bubbling
 * 
 */



// firstBox.addEventListener("click", e=>{
//     console.log("first box clicked")
// }, {
//     capture:true
// });


// secondBox.addEventListener("click", e=>{
//     console.log("second box clicked")
// },{
//     capture:true
// });


// thirdBox.addEventListener("click", e=>{
//     console.log("third box clicked")
// },{
//     capture:true
// });

// document.addEventListener("click", e=>{
//     console.log("dom clicked");
// },{
//     capture:true
// });



/**
 * 
 * 
 * here when we click on third box, then
 * output
 * documnet clicked
 * first box clicked
 * second box clicked
 * third box clicked
 * 
 *
 * this is knows as event capturing
 * 
 */





firstBox.addEventListener("click", e=>{
    console.log("first box clicked")
}, {once:true}); //this event to fired only once 


secondBox.addEventListener("click", e=>{
    console.log("second box clicked")
});


thirdBox.addEventListener("click", e=>{
    e.preventDefault();  // it will stop the default behaviour of the check box
    console.log("third box clicked")
});

document.addEventListener("click", e=>{
    console.log("dom clicked");
});



/**
 * 
 * 
 * here when we click on third box, then
 * output
 * third box clicked
 * second box clicked
 * first box clicked
 * dom clicked
 * 
 * 
 * 
   here when we click again on third box, then
 * output
 * third box clicked
 * second box clicked  // first box is removed because its event listener is enabled for once
 * dom clicked
 * 
 
 * 
 */