interface People{
    name:string,
    age:number,
    greet():string,//both are same
    // greet:()=>string
}

let person:People={
    name:"Harkirat",
    age:20,
    greet(){
        return "hello"
    }
}
console.log(person.greet())

//implementing class using interface
class Person implements People{
    name:string
    age:number
    number:string
    constructor(name:string,age:number){
        this.name=name
        this.age=age
        this.number="1234567890"
    }
    greet(){
        return "hello"
    }
}
//both are same
class Person2 implements People{
    
    constructor(public name:string,public age:number){
        this.name=name
        this.age=age
        
    }
    greet(){
        return "hello"
    }
}

let person2=new Person("Harkirat",20)
console.log(person2)
console.log(person2.greet())