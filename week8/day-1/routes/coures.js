const express = require("express");
const Router = express.Router;
const mongoose = require("mongoose");
const { courseModel, purchaseModel } = require("../db");
const { userMiddleware } = require("../middleware/user");

const courseRouter = Router(); ///kyuki router ek function hai to Router()

courseRouter.post("/purchase",userMiddleware ,async function (req, res) {
  //you would expext the user to pay money
  const userId = req.userId;
  const courseId = req.body.courseId;
// Validate courseId and adminId to ensure they are valid ObjectIds
   if (!mongoose.Types.ObjectId.isValid(courseId) || !mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid courseId or adminId" });
  }
  // should check that the user has actually paid the price
  await purchaseModel.create({
    userId,
    courseId,
  });

  res.json({
    message: "You have successfully bought the course",
  });
});


// http://localhost:3000/course/preview
courseRouter.get("/preview", async function (req, res) {
  //if login nii hai phir bhi course preview krne ke liye dedo
  const courses = await courseModel.find({});

  res.json({
    courses,
  });
});

module.exports = {
  courseRouter: courseRouter,
};
