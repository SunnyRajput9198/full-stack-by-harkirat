//Record


type user3 = Record<string, string>


// type user3 = {
//     [key:string]:string
// }

const users: user3 = {
    "resyyl":"harkirat",
    "HAREESH":"hari",
}

//map

type u1={
    name:string,
    age:number
}

const u=new Map<string,u1>()
u.set("resyyl",{name:"harkirat",age:20})
u.set("HAREESH",{name:"hari",age:20})
u.set("hari",{name:"hari",age:20})
console.log(u.get("resyyl"))
console.log(u.get("HAREESH"))
console.log(u.get("hari"))

//use map more often