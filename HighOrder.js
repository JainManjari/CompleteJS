const grocery = [
  {
    name: "Apples",
    price: 50,
    category: "fruits",
  },
  {
    name: "Pineapple",
    price: 100,
    category: "fruits",
  },
  {
    name: "Kiwi",
    price: 40,
    category: "fruits",
  },
  {
    name: "Ladyfinger",
    price: 20,
    category: "vegetables",
  },
  {
    name: "Milk",
    price: 50,
    category: "misc",
  },
];

const newPrice = grocery.map(({ name, price }) => {
  return { newName: name, newPrice: 2 * price };
});
console.log("newPrice ", newPrice);

// fetch all fruits
const fruits = grocery
  .filter(({ category }) => {
    return category == "fruits";
  })
  .map(({ name }) => name);
console.log("fruits ", fruits);

// findIndex
const apple = grocery.findIndex(({ name }) => name.toLowerCase() === "apples");
console.log("apple ", apple);

// sort
const sortedGroceryList = grocery.sort((a, b) => {
  // return a.localeCompare(b);
  return a.price - b.price;
});

console.log("sorted ", sortedGroceryList);

// some
const checkPrice = grocery.some((item) => {
  return item.price < -50;
});

console.log("some ", checkPrice);

// every
const checkAllPrice = grocery.every((item) => {
  return item.price > 10;
});

console.log("every ", checkAllPrice);

// reduce
let initialValue = 0;
let totalPrice = grocery.reduce(
  (currentTotal, item, index) => item.price + currentTotal,
  initialValue
);
console.log("totalPrice ", totalPrice);


// includes
const numbers = [1,2,3,4,5,6,7];
console.log(`is 10 present in ${numbers}`,numbers.includes(10));


// concat
const letters = ['a','b','c','d'];
const concatArray = numbers.concat(letters);
console.log("concatArray ", concatArray);


// flat -> it only flatten at level 1
const nestedArray = [1,2,3,4,[5,6,[7,8]]];
const flatArray = nestedArray.flat();
console.log("flatArray ",flatArray);

const flatArrayLevel2 = nestedArray.flat(2);
console.log("flatArrayLevel2 ",flatArrayLevel2);

console.log(nestedArray.flat(2).map(num=>num*10))


// flatMap
console.log(nestedArray.flatMap(num=>num*10))