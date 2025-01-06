//You need to create 4 routes (4 things that the hospital can do) 
// 1. GET - User can check how many kidneys they have and their health
//  2. POST - User can add a new kidney 
// 3. PUT - User can replace a kidney, make it healthy 
// 4. DELETE - User can remove a kidney
const express=require("express")
const app=express();
const user =[{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}];

app.get("/",function(req,res){
    const johnkidney=user[0].kidneys;
    const noofkidneys=johnkidney.length;
    let noofhealthykidneys=0;
    for(let i=0;i<johnkidney.length;i++){
        if(johnkidney[i].healthy){
            noofhealthykidneys+=1
        }
    }

    const noofunhealthykidneys=noofkidneys-noofhealthykidneys;

    res.json({
        noofkidneys,
        noofhealthykidneys,
        noofunhealthykidneys
    })
})

app.use(express.json());

app.post("/",function(req,res){
    // console.log(req.body)//undefined
    const ishealthy=req.body.ishealthy;
    user[0].kidneys.push({
        healthy:ishealthy
    })

    res.json({
        msg:"done"
    })
})

app.put("/",function(req,res){
    for(let i=0;i<user[0].kidneys.length;i++){
        user[0].kidneys[i].healthy=true;
    }
    res.json({});//vrna request hanfg ho jaegi

})
//remove all the unhealthy kidneys
app.delete("/",function(req,res){
    //in edge cases if data is not valid you should return 411
    //only if atleast one unhealthy kidney is there do this else return 411

    if(isthereatleastonehealthykidney()){
    const newkidneys=[];
    for(let i=0;i<user[0].kidneys.length;i++){
        newkidneys.push({
            healthy:true
        
    })
}
user[0].kidneys=newkidneys;
    res.json({});//vrna request hanfg ho jaegi
}else{
    res.Status(411).json({
        msg:"you have no bad kidneys"
    })
}

})

function isthereatleastonehealthykidney(){
    let atleastonehealthykidney=false;
    for(let i=0;i<user[0].kidneys.length;i++){
        atleastonehealthykidney=true;
    }
    return atleastonehealthykidney
}
app.listen(3000);