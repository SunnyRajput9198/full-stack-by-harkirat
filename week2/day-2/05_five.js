//write a function that
// 1. Read the content of a File
// 2.trim the extra space from left and right
// 3.writes it back to the file

const fs=require("fs")

const p=new Promise(function(resolve,reject){
   fs.readFile("a.txt","utf-8",function(err,data){
    if(!err){
    resolve(data);
    }else{
        reject(err)
    }
   })
})
p.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err)
})
