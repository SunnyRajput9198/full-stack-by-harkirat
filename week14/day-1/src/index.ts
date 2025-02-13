let x: number|string=10//isem number define kiya hain kyuki number hai and string likha hai kyuki x="sunny" kiya hai jo ki string hai isliye string likha
x="sunny"
console.log(x);

//hm : any type likhegee to sb include kr jaega every thpe kisi me error nii dega
function greet(firstname:string){
    console.log("Hello "+firstname)
}

greet("Harkirat")

function sum(a:number,b:number){
    return a+b
}
console.log(sum(10,20))

function age(age:number){
    if(age>18){
        console.log("adult")
    }
    else{
        console.log("child")
    }
}
age(20)

//take a function as a input and returns it after 1 second

//it take function as a input in which it takes no argument and returns a number
//if retune 1 nij krega to ()=>void kr dege jo ki shi hai
function sleep(fn:()=>number){
    setTimeout(fn,1000)
}

//it is taking greet as input
function sleep2(fn:(a:string)=>void){
    setTimeout(fn,1000)
}

function sleeping(){
    console.log("sleeping")
    return 1;
}
sleep(sleeping)
sleep2(greet)

//in tsconfig.json me rootDir and outDir add kiya hai usko jake dekho