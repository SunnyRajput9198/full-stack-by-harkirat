//Abstract class
abstract class Prison{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    abstract greet():string//greet() is an abstract method—it has no implementation and must be implemented by any subclass.
    hello(){
        return "hello"
    }
}
//in abstract class we can define default function here called hello but that not true in interface
//so we cant call hello() in interface

//difference between abstract class and interface
//an abstract class can have default implementation but not in interface
//an abstract class can have constructor but not in interface
class Employee extends Prison{
    salary:number
    constructor(name:string,age:number,salary:number){
        super(name,age)//// Calls the constructor of the abstract class Prison
        this.salary=salary
    }
    greet(){
        return "hello"+this.name
    }
}