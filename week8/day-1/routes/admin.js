const { Router } = require("express");
const { adminModel } = require("../db");
const adminRouter = Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { jwtadminSecret } = require("../config");
const { adminMiddleware } = require("../middleware/admin");
const user = require("./user");
const { courseModel}=require("../db")  
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

//creating a web3 saas in 6 hours
//->ye course database me insert ho rha hai
// http://localhost:3000/admin/course
// {
//   "title":"update kro",
//    "description":"change description",
//    "price":"000",
//    "imageUrl":"new hai"
//  }
// return krega ek courseid="courseId": "6790eecda02128919b36f6c2",
// in header pass toke//token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1ZTU0ZDI0MDI2ZDY0NTA0ZjA1OTA2MyIsImlhdCI6MTY1NjQ2NDg2MCwiZXhwIjoxNjU2NDY2ODYwfQ.3-9r7-4-3-5-2-0-1-6-8-7-9-4-5-3-2-6-1-0-8-7-9-5-6-4-3-2-1
adminRouter.post("/course", adminMiddleware, async function (req, res) {
  const adminId = req.userId;//middleware me dekho usme set kiya hai to userid
  const { title, description, imageUrl, price } = req.body;

  const coures = await courseModel.create({
    title:title,
    description:description,
    price:price,
    imageUrl:imageUrl,
    courseId:adminId
  });

  res.json({
    courseId: coures._id,
    message: "course created successfully",
  });
});


// http://localhost:3000/admin/course
// {
//   "title":"update kro",
//    "description":"change description",
//    "price":"000",
//    "imageUrl":"new hai",
//    "courseId":"urs"
// }
adminRouter.put("/course",adminMiddleware, async function (req, res) {
  const adminId = req.userId;

  const { title, description, imageUrl, price, courseId } = req.body;

  // creating a web3 saas in 6 hours
   // Validate courseId and adminId to ensure they are valid ObjectIds
   if (!mongoose.Types.ObjectId.isValid(courseId) || !mongoose.Types.ObjectId.isValid(adminId)) {
    return res.status(400).json({ message: "Invalid courseId or adminId" });
  }
  const course = await courseModel.updateOne({
      _id: courseId, 
      creatorId: adminId  // Find course by ID and creator ID
  }, {
      title: title, 
      description: description, 
      imageUrl: imageUrl, 
      price: price
  })

  res.json({
      message: "Course updated",
      courseId: course._id
  })
});

// http://localhost:3000/admin/course/bulk
adminRouter.get("/course/bulk",adminMiddleware, async function (req, res) {
  const adminId = req.userId;
console.log(adminId)
//course tbhi return hoga jb createid=adminid
  const courses = await courseModel.find({
      creatorId: adminId 
  });
console.log(courses)
  res.json({
      message: "Course updated",
      courses
  })
});

module.exports = {
  adminRouter: adminRouter,
};
