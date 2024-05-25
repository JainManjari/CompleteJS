console.log("page loaded");

const userLogin = () => {
  console.log("enter username and pwd");

  let user = prompt("Enter user");
  let pwd = prompt("enter pwd");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user == "1" && pwd == "1") {
        resolve("User autenticated");
      } else {
        reject("user unauthorised");
      }
    }, 1000);
  });
};

function goToHomePage(userAuthStatus) {
  return Promise.resolve(`Go to home page as ${userAuthStatus}`);
}

// chaining of promises
// userLogin()
//   .then((response) => {
//     console.log("response ", response);
//     return goToHomePage(response);
//   })
//   .then((userAuthStatus) => {
//     console.log("userAuthStatus ", userAuthStatus);
//   }).catch((err)=>{
//     console.log("err ", err);
//   });

// async function asyncAwaitUserLogin () {
//   try {
//       let response = await userLogin();
//       console.log("response ", response);
//       let userAuthStatus = await goToHomePage("userAuthorised");
//       console.log("userAuthStatus ", userAuthStatus);
//   } catch(err) {
//     console.log("Err ", err);
//   }
// }

// asyncAwaitUserLogin();

const makeAPICall = (milliseconds) => {
  return () => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("API call completed in ", milliseconds);
      }, milliseconds);
    });
  }
};

const APICalls = [makeAPICall(1000), makeAPICall(500), makeAPICall(2500)];

// Promise.all(APICalls).then((values) => {
//   console.log("values"); // all the api calls happen parallely
// });



// it will wait till the response of one api, then process with the next api call 
(async function () {
  for (let api of APICalls) {
    console.log(await api());
  }
})();
