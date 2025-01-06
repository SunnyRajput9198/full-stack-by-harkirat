//promise class gives you a promise that i will return somethimg in the future

//A promise in js is an object that represent the eventual completion(or failure) ofan asynchnoronous operation and its resulting value


//->> basic syntax
//       new Promise(function(resolve,reject){
//           setTimeout(function(){
//          resolve()
//       })
//        })

//callback version
// setInterval(callback,3000)

//promisified version
const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hi bro");
        resolve();//jb resolve call hoga vo then vala execute hoga
    },3000)
})

promiseone.then(function(){
    console.log("task 1 completed")
})

//->>
function random(resolve){//resolve is also a function
 setTimeout(resolve,3000)
}
let p=new Promise(random)

function callback(){
 console.log("promise suced")
}
p.then(callback)
