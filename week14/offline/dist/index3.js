"use strict";
//Record
// type user3 = {
//     [key:string]:string
// }
const users = {
    "resyyl": "harkirat",
    "HAREESH": "hari",
};
const u = new Map();
u.set("resyyl", { name: "harkirat", age: 20 });
u.set("HAREESH", { name: "hari", age: 20 });
u.set("hari", { name: "hari", age: 20 });
console.log(u.get("resyyl"));
console.log(u.get("HAREESH"));
console.log(u.get("hari"));
//use map more often
