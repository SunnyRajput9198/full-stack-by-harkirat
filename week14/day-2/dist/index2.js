"use strict";
let person = {
    name: "Harkirat",
    age: 20,
    greet() {
        return "hello";
    }
};
console.log(person.greet());
//implementing class using interface
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.number = "1234567890";
    }
    greet() {
        return "hello";
    }
}
//both are same
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    greet() {
        return "hello";
    }
}
let person2 = new Person("Harkirat", 20);
console.log(person2);
console.log(person2.greet());
