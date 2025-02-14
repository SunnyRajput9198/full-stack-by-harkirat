//arrays in typescript
function getmax(arr:number[]){
    let max=-10000000;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

console.log(getmax([1,2,3,4,5,6,7,8,9,10]));

//arrays in typescript
interface Addr{
    city:string,
    pincode:string
}

interface Pers{
    name:string,
    age:number,
    address:Addr[]
}

let us1:Pers={
    name:"harkirat",
    age:25,
    address:[
        {
            city:"delhi",
            pincode:"110011"
        },
        {
            city:"mumbai",
            pincode:"120012"
        }
    ]
}

//ex-given a list  user filter out the users that are legal

interface Use1{
    firstname:string,
    lastname:string,
    age:number,
}

function filteruser(arr:Use1[]){
    let result:Use1[]=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].age>18){
            result.push(arr[i]);
        }
    }
    return result;
}

const filteruser1=filteruser([
    {
        firstname:"harkirat",
        lastname:"singh",
        age:14
    },
    {
        firstname:"harkirat",
        lastname:"singh",
        age:25
    },
    {
        firstname:"ashish",
        lastname:"kumar",
        age:18
    },
    {
        firstname:"prashant",
        lastname:"sharma",
        age:25
    }
]);
console.log(filteruser1);