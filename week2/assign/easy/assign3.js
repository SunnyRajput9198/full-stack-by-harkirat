//read a file

const fn=require('fs')


let p=new Promise(function(resolve,reject){
    fn.readFile("a.txt","utf-8",function(err,data){
        if(!err){
            resolve(data)
        }else{
            reject(err)
        }
    })
})

p.then(function(data){
    console.log(data)
}).catch(function(err){
    console.error(err)
})