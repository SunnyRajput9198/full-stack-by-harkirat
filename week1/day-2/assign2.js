//assign 1
//Write a function that takes a user as an input and greets them with their name and age

function greet(username){
    console.log("Hi " + username.name + " your age is " + username.age);    
}
let username ={
    name: "ABC",
    age: 99
}
greet(username);

//assign 2
//Write a function that takes a new object as input which has name , 
// age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
function greet(username){
    console.log("Hi Mr. " + username.name + " your age is " + username.age);    
}
let username2 = {
    name: "XYZ",
    age: 99,
    gender: "Male",
};
greet(username2);
