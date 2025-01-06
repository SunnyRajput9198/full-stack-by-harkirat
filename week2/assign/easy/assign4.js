//write to a file

const fn=require('fs')

let p=new Promise(function(resolve,reject){
    //writefile me second vala jaega
    fn.writeFile("a.txt",'file me likha gya',"utf-8",function(err){
        if(!err){
            resolve("message written succesfully")
        }else{
            reject(err)
        }
    })
})

p.then(function(message){
    console.log(message)
}).catch(function(err){
    console.error("erroe aaega:",err)
})