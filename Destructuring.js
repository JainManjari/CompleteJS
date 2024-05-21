const employee = {
  name: "MJ",
  email: "manjarijain98@gmail.com",
  department: "software dept",
  age: "25",
  address: {
    city: "delhi",
    country: "India",
  },
};

const {
  address: { city },
} = employee;

// console.log("address", address) // error as address is not defined
console.log("city ", city);

function displayName({ age, name }) {
  console.log("display ", age, name);
}

displayName(employee);

const fruits = ["apple", "pineapple", "banana", "kiwi", "guava"];

const [fruit1, , fruit2, ...rest] = fruits;

console.log(fruit1, fruit2, rest); // apple and banana

const grocery = [
  {
    item: "apples",
  },
  {
    item: "pineapple",
  },
  {
    item: "kiwi",
  },
  {
    item: "guava",
  },
  {
    item: "banana",
  },
];

const [{ item }, , ...res1] = grocery;

console.log(item, res1);

const company = {
  name: "paypal",
  locations: ["sp", "india", "us"],
};

const {
  locations: [locations1],
} = company;

console.log(locations1);


const users = [
    ["Manjari", "Jain"],
    ["Harry", "Potter"],
    ["Hermoine", "Granger"]
];


/**
 * 
 * Output = [
 *    {
 *         firtName:"Manjari",
 *         lastName:"Jain"
 *    }, 
 *    {
 *         firstName: "Harry",
 *         lastName: "Potter"
 *    }
 *    ...
 * ]
 * 
 * 
 */


const userObj = users.map(([firstName, lastName])=>{
    return {firstName:firstName, lastName:lastName}
})

console.log(userObj);