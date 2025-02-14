function isEven(n:number):boolean{
    if(n%2==0){
        return true
    }
    else{
        return false
    }
}
isEven(10)

//interface--can also use another interface

interface Address{
    city:string,
    country:string,
    pincode:number
}
interface User{
    name:string,
    age:number,//here we have added ? which meams it is optional ab ye isko optional bna dega
    address?:Address
}

interface office{
    address:Address
}

let user2:User={
    name:"Harkirat",
    age:20
}

let user:User={
    name:"Harkirat",
    age:20,
    address:{
        city:"Delhi",
        country:"India",
        pincode:110001
    }
}

function islegal(user:User){
    if(user.age>18){
        return true
    }
    else{
        return false
    }
}
const ans=islegal(user)
if(ans){
    console.log("legal")
}
else{
    console.log("not legal")
}