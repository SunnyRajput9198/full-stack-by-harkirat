const express=require("express")
const Router=express.Router
const jwt=require("jsonwebtoken")
const jwtuserSecret="areudmjt"

const userRouter=Router()///kyuki router ek function hai to Router()
const {userModel}=require("../db")
// http://localhost:3000/user/signup
// {
//   "email":"sunny@gmail.com",
//  "password":"12355",
//  "firstName":"sunny",
//  "lastName":"rajput"
//  }
userRouter.post("/signup", async function (req, res) {

  const {email, password, firstName, lastName } = req.body; // TODO: adding zod validation
    // TODO: hash the password so plaintext pw is not stored in the DB

    // TODO: Put inside a try catch block
    //ye database me insert ho rha hai
    // await userModel.create({
    //     email: email,
    //     password: password,
    //     firstName: firstName, 
    //     lastName: lastName
    // })
//if same hote hai to email,bas likhdo 
    //dono same hai
    await userModel.create({
        email,
        password,
        firstName, 
        lastName
    })

  res.json({
    message: "signup successfull",
  })
})


// http://localhost:3000/user/signin
// {
//   "email":"sunny@gmail.com",
//  "password":"12355"
//  }
userRouter.post("/signin", async function (req, res) {
    const {email, password} = req.body;
    //todo: ideally password hashed form me store hoga na ki plane text ne vo hash hua hoga to usko phle plain me kro phir usko hash krna hoga
    //if find krege to vo [] return krega if  pass not matched and if([]) is true token phir bhi dega vo in find
    //while findone return either the user or undedfined
    const user = await userModel.findOne({email:email, password:password});
//if user exist
    if(user){
      const token=jwt.sign({id: user._id},jwtuserSecret)
      res.json({
        token:token
      })
    }
    else{
    res.status(403).json({
      message: "incorrect cridentials",
    })}
  })  


  userRouter.get("/purchases", function (req, res) {
    res.json({
      message: "signin endpoint",
    })
  })
 
module.exports={
  userRouter:userRouter
 }
