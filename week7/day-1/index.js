const bcrypt = require("bcrypt");
const express = require("express");
const { UserModel, TodoModel } = require("./db"); //import kiya gya hai from db.js
const jwt = require("jsonwebtoken");
const JWT_SECRET = "hithere";
const mongoose = require("mongoose");
const { z } = require("zod"); //importing zod

//request hung ho jaegi if connect nii krege to ye moongoose se connect kr rha hai
mongoose.connect(
  "mongodb+srv://rajputsny2:ond1rGQZUbhgLloI@cluster0.cbcsh.mongodb.net/snunny-22"
);

const app = express();

app.use(express.json()); //for parsing body

// res.body pe->
//{
// "name":"sunny","password":"53c8cc6ss57","email":"sunsssccccncy@gmail.com"
// }
app.post("/signup", async function (req, res) {
  //input validation->by using zod -< ye  check krega string me hai ki nii like min lenght 3 max length 100 hi hai na
  const requiredbnody = z.object({
    email: z.string().min(3).max(100).email(),
    name: z.string().min(3).max(100),
    password: z.string().min(3).max(30),
  });

  const parsedatawithsuccess = requiredbnody.safeParse(req.body);

  if (!parsedatawithsuccess.success) {
    res.json({
      message: "incorrect format",
      error: parsedatawithsuccess.error,
    });
    return;
  }
  const email = req.body.email; //string
  const password = req.body.password; //string-> should have one up,lc,special case
  const name = req.body.name; //string

  //ye promise return krega isliye await kiya hai ise
  //jb tk ye database me put nii kr dega tb tk aage nii bdhega function hung rhega isliye moongoose connect kiya hai
  //yhi to insert ho rhas hai mongodb me usermodel.create sbse phle email,pass,name liyaphir usko  dtabase me insert kr diya
  //prmise rerun krta hai isliye hash kiya

  const hashedpassword = await bcrypt.hash(password, 6);
  console.log(hashedpassword);

  await UserModel.create({
    email: email,
    password: hashedpassword,
    // salt:salt,
    name: name,
  });

  res.json({
    message: "user already exist",
  });

  res.json({
    message: "You are signed up",
  });
});

//body me pass kro email,password
app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  //ye bhi ek promise return krega isliye await kiya hai
  const response = await UserModel.findOne({
    email: email,
  });

  //if email exist nii krta hai vo phle hi return ho jaega
  if (!response) {
    res.status(403).json({
      message: "user does not exist in our db",
    });
    return;
  }

  //bcrypt apne aapa sb round,salt sb apne aap htake comapre kr lega usko hashed kr dega jo hash hua hai signup me or comapre kr lega
  const paswordmatched = await bcrypt.compare(password, response.password);

  if (paswordmatched) {
    //as every mongoose database have unique _id as _id is the form of objectid so convertt it into string
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
});

//body me userid,title,done pass kro
app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId: userId,
    title: title,
    done: done,
  });

  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId: userId,
  });

  res.json({
    todos,
  });
});

function auth(req, res, next) {
  const token = req.headers.token;

  const response = jwt.verify(token, JWT_SECRET);

  if (response) {
    req.userId = response.id;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
}
app.listen(3000);
