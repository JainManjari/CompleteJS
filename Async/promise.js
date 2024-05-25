// Promises are async in nature

const promise = new Promise((resolve, reject) => {
  console.log("promise execution");
  if (false) {
    const person = {
      name: "harry potter",
    };
    resolve(person);
  } else {
    const error = "error rejected";
    reject(error);
  }
});

// promise.then(
//     (data)=>console.log("passed", data),
//     (err)=>console.log("reject", err)
// );

promise
  .then((data) => console.log("passed", data))
  .catch((error) => console.log("error ", error)) // if reject is not handled in then catch will handle it
  .finally(console.log("code cleaned up"));

let p = Promise.resolve("execution completed");
// let p = Promise.reject("execution rejected");
p.then((val) => console.log("promise with resolve ", val)); // not necesaary to pass the reject function

function asyncTask() {
  return Promise.resolve();
}
asyncTask().then(() => console.log(`${name} is here!`));
let name = "harry potter";

// chaining
// const chainPromise = Promise.resolve("done");

// chainPromise.then((val) => {
//   console.log(val);
//   return "done2";
// }).then((val)=>{
//     console.log(val);
//     return "done3";
// }).then((val)=>{
//     console.log(val);
// });

// chaining 2
const chainRejectPromise = Promise.reject("failed");

chainRejectPromise
  .then((val) => {
    console.log(val);
    return "done2";
  })
  .then((val) => {
    console.log(val);
    return "done3";
  })
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log("error ", err);
  });

// having one catch for all promises is fine,
// no need to define catch for each promise in chaining

const makeAPICall = (milliseconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("API call completed in ", milliseconds);
    }, milliseconds);
  });
};

const APICalls = [makeAPICall(1000), makeAPICall(500), makeAPICall(2500)];

Promise.all(APICalls).then((values) => {
  console.log("values"); // all the api calls happen parallely
});

Promise.race(APICalls).then((value) => {
  console.log("first api call name", value);
}); // it tells us which API call got exceuted first
