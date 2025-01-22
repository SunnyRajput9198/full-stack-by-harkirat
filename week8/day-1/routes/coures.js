const express=require("express")
const Router=express.Router


const courseRouter=Router()///kyuki router ek function hai to Router()

  courseRouter.post("/purchase", function (req, res) {
    //you would expext the user to pay money
    res.json({
      message: "signin endpoint"
    })
  })

  courseRouter.get("/preview", function (req, res) {
    res.json({
      message: "signup endpoint",
    })
  })

module.exports={
 courseRouter:courseRouter
}
