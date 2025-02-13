//how you can define object

function greet2(user:{
    name:string,
    age:number,
    address:{
        city:string,
        country:string
    }
}){
    console.log("Hello "+user.name)
}

greet2({
    name:"Harkirat",
    age:20,
    address:{
        city:"Delhi",
        country:"India"
    }
})

//THIS  IS HOW YOU CAN DEFINE OBJECT by defing interface

interface usertype{
    firstname:string,
    lastname:string,
    age:number,
}
let user:usertype={
    firstname:"Harkirat",
    age:20,
    lastname:"Singh"
}