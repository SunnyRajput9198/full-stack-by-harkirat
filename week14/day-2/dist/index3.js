"use strict";
//Abstract class
class Prison {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        return "hello";
    }
}
//in abstract class we can define default function here called hello but that not true in interface
//so we cant call hello() in interface
//difference between abstract class and interface
//an abstract class can have default implementation but not in interface
//an abstract class can have constructor but not in interface
class Employee extends Prison {
    constructor(name, age, salary) {
        super(name, age); //// Calls the constructor of the abstract class Prison
        this.salary = salary;
    }
    greet() {
        return "hello" + this.name;
    }
}
