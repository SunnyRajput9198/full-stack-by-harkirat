//creating an http server
//express
//node default library=>no

const express=require("express");

const app=express();//creating the clinic
function sum(n){
    let ans=0;
    for(let i=0;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}


app.get("/",function(req,res){
    const n=parseInt(req.query.n);
    const ans=sum(n);
    req.send("hi your ans is "+ ans)
})

app.listen(3000)//listening to the clinbic