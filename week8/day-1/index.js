require("dotenv").config();//to import env variables
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
    await mongoose.connect(process.env.MONGODB_URL)//process.env.MONGODB_URL is the env variable that is set in the .env file
    app.listen(3000);
}
main()
