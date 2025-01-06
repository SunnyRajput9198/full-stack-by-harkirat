const express=require("express");
const app=express();
const bodyparser=require("body-parser");

//commonl used middleware
//The express.json() middleware or body-parser middleware is a built-in middleware function in Express.js used to parse incoming request bodies that are formatted as JSON. This middleware is essential for handling JSON payloads sent by clients in POST or PUT requests.

//if you want to send json data then you have to use body-pareser.json data middleware which is used to  parse body
app.use(bodyparser.json());

app.post("/sum", function(req, res) {
    console.log(req.body)//if middleware define ni krege to undefined aaega body me  lein uske baad nii aaega
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000)

//in servere mne aese define krna hai
// isko body me likhna hai
//http://localhost:3000/sum

//{
// "a":1,"b":3
// }