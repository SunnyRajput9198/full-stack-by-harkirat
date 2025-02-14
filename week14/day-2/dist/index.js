"use strict";
function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
isEven(10);
let user2 = {
    name: "Harkirat",
    age: 20
};
let user = {
    name: "Harkirat",
    age: 20,
    address: {
        city: "Delhi",
        country: "India",
        pincode: 110001
    }
};
function islegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const ans = islegal(user);
if (ans) {
    console.log("legal");
}
else {
    console.log("not legal");
}
