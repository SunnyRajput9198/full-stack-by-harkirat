const express=require("express");
const app=express();


//add a middleware that loga the url,method,timestamp

function requesthandler(req,res,next){

  console.log("method is:" + req.method)
  console.log("route is :" + req.url)
  console.log("Host or url is :" + req.hostname)
  console.log("timestamp is:" + new Date())
  next();
}
// isko dhyan dena hai kha pe define kr rhe hai jha define hoga uskeneeche vale route me hi kaam kreega middleware
app.use(requesthandler)//here by this you can use middleware on your app

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);