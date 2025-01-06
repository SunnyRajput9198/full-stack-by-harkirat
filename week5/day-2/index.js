const express = require("express");

const app = express();


let requestcount=0;
function requesthandler(req,res,next){
    requestcount=requestcount+1;
   // req.name="harkirat123"//best example to modify or chnage the request or respond object
    console.log("total no of request:"+ requestcount)
    res.json({
        mesage:"i ended up request early"
    })
   next();}//bets ex for Ending the request-response cycle.
// Calling the next middleware function in the stack.



function realsumhandler(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log(req.name);
    
    res.json({
        ans: a + b
    })
    
}

//http://localhost:3000/subtract/?a=1&b=2->  isko aese call krna hai
app.get("/sum",requesthandler,realsumhandler);



app.listen(3000);

//middleware->it will either stop the request right there or forward the request to the route handler
//middleware are the function thta have request to the req,res object as well as the next object//express is nothing but a chain of middlewre