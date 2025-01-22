const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { courseRouter } = require("./routes/coures");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");

app.use(express.json());
app.use("/user",userRouter)//->all the route that start with user are handled by couseRouter biggest benefit is all the prefix request can be maintained easily here only
//all the route that start with course are handled by couseRouter
app.use("/course",courseRouter)//->jo prefix yha pe aa gya usko andar rewrite krne ki jrurat nii hai
app.use("/admin",adminRouter)

async function main() {
    
    console.log("connected to")
    await mongoose.connect("mongodb+srv://rajputsny2:ond1rGQZUbhgLloI@cluster0.cbcsh.mongodb.net/coursera")
    app.listen(3000);
}
main()
