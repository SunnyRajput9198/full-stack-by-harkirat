const axios = require("axios");

// Fetch example
//fetch is a asynchronous function which means it returns a promise
async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET",
  });
  ///dekho last me kisme convert krna hai if text me krna ho to .text krdo
  //  //while axios automatically
  const json = await response.json();
  console.log(json);
}

// Axios example
//while axios is a library
// //if post request-->link,body,header // //if get request-->link,header
async function main2() {
  
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1", {
      headers: {
        Authorization: "Bearer 1233",
      },
    });
    console.log(response.data); // Log the response data to check the structure
    if (response.data.todos) {
      console.log(response.data.todos.length); // Log the length if todos exists
    } else {
      console.log("Todos not found in the response");
    }
  
}

// Run the functions
main();
main2();

