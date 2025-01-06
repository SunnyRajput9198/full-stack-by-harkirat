//assignment
//1.create a backend server in node.js, that returns the sum end points
//2.write an HTML file that,that hits the backend server using the fetch api

const express=require("express")
const app=express();

app.use(express.json())//we are using body so hmne express.json middleware use kiya hai
//if hm log is middleware ka use nii krege to req.body will be undefined


//if frontend or backend ko same domain pe host krna hai usme koi scene nii hai cors ka
//ye jb call hoga jb / hit hog
app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/index.html")
})

//ye jb call hoga jb /sum hit hog
app.post("/sum",function(req,res){
    const a=parseInt(req.body.a)
    const b=parseInt(req.body.b)

    res.json({
        sum:a+b
    })
});

app.listen(3000)

/*
Notes:
- To use cors first we have to do npm install cors
- Then we write the second line
- If we want to allow all frontend to send the request then we will write it as :
        - app.use(cors())
- Agar if we want like sirf is is frontend se request ana chahiye then we will specify that :
a       -app.use(cors({
            Domain:["https://google.com", "https://hdfcbank.com"]
        }))
*/