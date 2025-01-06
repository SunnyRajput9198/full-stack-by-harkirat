const express=require("express")
const app=express();
//if hm log firstarg,secondarg vala use ni krerge to aese dege input
// 1. http://localhost:3000/multiply?a=1&b=2
// 2. [http://localhost:3000/add?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// 3. [http://localhost:3000/divide?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// 4. [http://localhost:3000/subtract?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)

//http://localhost:3000/sum/1/2  hm isko ab aese de skte hai input / krke 
//->jo bracket me likhta hai usi ko calll kret hai localhost ke baad jisko bhi krna ho
app.get("/multiply/:firstargument/:secondargument",function(req,res){
    const a=parseInt(req.params.firstargument)//multiply or divide me parsaeint use nii krege to koi dikkat nii
    //lekin add,sub me  must hai use krna
    const b=parseInt(req.params.secondargument)//string me aata hai to isko int me convert krdo
// :means dynamic ko bhi accept kr lega
    res.json({
        answer:a*b
    })
})
app.get("/sum/:firstargument/:secondargument",function(req,res){
    const a=parseInt(req.params.firstargument)
    const b=parseInt(req.params.secondargument)

    res.json({
        answer:a+b
    })
})
app.get("/divide/:firstargument/:secondargument",function(req,res){
    const a=parseInt(req.params.firstargument)
    const b=parseInt(req.params.secondargument)

    res.json({
        answer:a/b
    })
})

// http://localhost:3000/subtract/1/2   aese call krna hai
app.get("/subtract/:firstargument/:secondargument",function(req,res){
    const a=parseInt(req.params.firstargument)
    const b=parseInt(req.params.secondargument)

    res.json({
        answer:a-b
    })
})
app.listen(3000)