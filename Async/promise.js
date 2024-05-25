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


