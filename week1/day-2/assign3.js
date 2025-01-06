//assign 1
//Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
const arr = [1, 4, 5, 6, 8, 7, 9, 11, 13, 15, 24, 56, 89, 666, 34];

function newarr(arr) {
  return arr.filter((num) => num % 2 == 0);
}
const ans = newarr(arr);
console.log(ans);

//assign 2
//Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

const users = [
  {
    name: "Harkirat",
    age: 21,
  },
  {
    name: "ram",
    age: 17,
  },
  {
    name: "babu",
    age: 18,
  },
  {
    name: "sunil",
    age: 16,
  },
  {
    name: "sunny",
    age: 20,
  },
];
function agebadihai(users) {
  let n = users.length;
  let i = 0;
  while (i < n) {
    if (users[i].age > 18) {
      console.log(`name:${users[i].name} ,age is ${users[i].age}`);
    }
    i++;
  }
}
agebadihai(users);
