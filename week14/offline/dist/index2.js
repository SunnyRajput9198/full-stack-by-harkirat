"use strict";
const displayProfile1 = (user) => {
    console.log(`Name: ${user.name},email: ${user.email},age: ${user.age}`);
};
displayProfile1({ name: "harkirat", age: 20 });
const user1 = { name: "harkirat", age: 20 };
// user1.name = "harkirat"; ..givess error because we have made it a read only property if readonly niii hai then we can change the value of it
