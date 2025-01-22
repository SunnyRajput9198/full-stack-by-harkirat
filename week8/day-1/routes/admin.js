const { Router } = require("express");
const {adminModel }= require("../db");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const jwtadminSecret = "areuderermjt";
//jsonwebtoken,zod,bcrypt

// http://localhost:3000/admin/signup
// {
//   "email":"sunny@gmail.com",
//  "password":"12355",
//  "firstName":"sunny",
//  "lastName":"rajput"
//  }
adminRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;
  //TODO: hash the password so plaintext pw is not stored in the DB
  await adminModel.create({
    email,
    password,
    firstName,
    lastName,
  });
  res.json({
    message: "signup succesfull",
  });
});


//http://localhost:3000/admin/signin
// {
//   "email":"sunny@gmail.com",
//  "password":"12355"}
adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  //todo: ideally password hashed form me store hoga na ki plane text ne vo hash hua hoga to usko phle plain me kro phir usko hash krna hoga
  //if find krege to vo [] return krega if  pass not matched and if([]) is true token phir bhi dega vo in find
  //while findone return either the user or undedfined
  const admin = await adminModel.findOne({ email: email, password: password });
  //if user exist
  if (admin) {
    const token = jwt.sign({ id: admin._id }, jwtadminSecret);
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "incorrect cridentials",
    });
  }
});

adminRouter.post("/course", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});
adminRouter.put("/course", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});
adminRouter.get("/courses/bulk", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
