"use strict";
const displayProfile = (user) => {
    console.log(`Name: ${user.name},email: ${user.email},age: ${user.age}`);
};
displayProfile({ name: 'harkirat', age: 20, email: 'harkirat@gmail.com' });
const handleEvent = (event) => {
    console.log(`Handling event: ${event}`);
};
handleEvent('click'); // OK
