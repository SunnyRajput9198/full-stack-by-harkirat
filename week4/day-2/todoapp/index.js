// const fs=require("fs")

// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data)
// })


const express=require("express");
const app=express();

//route handlers
// /route
//GET method  
//just like fs err,data same as express req->request,res->respond
app.get('/',function(req,res){
    // res.send("hello world");   
    // if hmko json data send krna hai
    // res.json({
    //     name:"harkirat"
    // })
    //if hmko html data send krna hai
    res.send("<b> hi there </b>")
})

//jb  post request
app.post('/',function(req,res){
    res.send("hello world from the post endpoint")
})

// app.get('/asd',function(req,res){
//     res.send("hello world")
// })

app.listen(3000)//which port//define the address of the clinic
//to send arequest request to own machine->ping localhost for ip then postman me http://localhost.3000
//if input dene vala ho to http://localhost:3001/?n=30