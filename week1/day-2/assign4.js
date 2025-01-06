//Create a function that takes an array of objects as input,
//and returns the users whose age > 18 and are male

const users = [
    { name: "Harkirat", age: 21, gender: "male" },
    { name: "Ram", age: 17, gender: "male" },
    { name: "Babu", age: 18, gender: "male" },
    { name: "Sunil", age: 16, gender: "male" },
    { name: "Sunny", age: 20, gender: "male" },
    { name: "Priya", age: 25, gender: "female" },
  ];
  
  function filterMaleUsers(users) {
    return users.filter((user) => user.age > 18 && user.gender =="male");
  }
  
  const result = filterMaleUsers(users);
  console.log(result);
  