// console.log("task started");
// function asyncTask(callback) {
//     console.log("task is running");
//     callback();
// }

// asyncTask(()=>{console.log("manjari is here")});
// console.log("task completed");

// console.log("task started");
// function asyncTask(callback) {
//     console.log("task is running");
//     callback();
// }

// asyncTask(()=>{console.log(`${name} is here`)}); // initiation error
// console.log("task completed");
// let name = "manjari";

// console.log("task started");
// function asyncTask(callback) {
//     console.log("task is running");
//     setTimeout(callback, 0);
// }

// asyncTask(()=>{console.log(`${name} is here`)});
// console.log("task completed");
// let name = "manjari";

/**
 *
 *
 * event loop
 * output
 * task started
 * task is running
 * task completed
 * manjari is here
 *
 */






// error handling
console.log("task started");
function asyncTask(callback) {
  console.log("task is running");
  setTimeout(callback("Error!!!!!!"), 0);
}

asyncTask((err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(`${data}`);
  }
});
console.log("task completed");
let name = "manjari";
