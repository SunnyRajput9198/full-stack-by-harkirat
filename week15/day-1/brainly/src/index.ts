//step 1-npm install -d typescript
//step 2-npx tsc --init
//  ts.config.json me jake outdir ko dist kro and rootdir ko src
//step 3-npm install express// it uses require which is used in js in typescript we use import so 
//step 3-npm install @types/express
//tsc-b-> to compile ts to js
import express from "express"
import moongoose from "mongoose"//npm install mongoose
import jwt from "jsonwebtoken"//npm install @types/jsonwebtoken
import cors from "cors";
import { random } from "./utils";//import kro
import { userMiddleware ,jwt_secret} from "./middleware";
import { UserModel, ContentModel,LinkModel } from "./db";
// package.json me jao usmem build,start,dev add kiya hai script me
// sbse phle npm insatll krdo uskko if error de to @types/  lgado ar phir usko import kro

const app = express()
app.use(express.json()); // Middleware to parse JSON request bodies.//to parse the body
app.use(cors()); // Middleware to allow cross-origin requests.

// Route 1: User Signup
//{
//     "username":"sunnyrajputiji",
//     "password":"123456"
//    }
// http://localhost:3000/api/v1/signup
app.post("/api/v1/signup", async (req, res) => {
    // TODO: Use zod or a similar library for input validation.
    // TODO: Hash the password before storing it in the database.
    const username = req.body.username;
    const password = req.body.password;

    try {
        // Create a new user with the provided username and password.
        await UserModel.create({ username, password });
        res.json({ message: "User signed up" }); // Send success response.
    } catch (e) {
        // Handle errors like duplicate usernames.
        res.status(409).json({ message: "User already exists" }); // Conflict status.
    }
});

// Route 2: User Signin
// {
//     "username":"sunnyrajputiji",
//     "password":"123456"
       
//    }
// http://localhost:3000/api/v1/signin
//it returns a token


app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Find a user with the provided credentials.
    const existingUser = await UserModel.findOne({ username, password });
    if (existingUser) {
        // Generate a JWT token with the user's ID.
        //yha pr ye _id user ki object_id hai
        const token = jwt.sign({ id: existingUser._id }, jwt_secret);
        res.json({ token }); // Send the token in response.
    } else {
        // Send error response for invalid credentials.
        res.status(403).json({ message: "Incorrect credentials" });
    }
});

// Route 3: Add Content
// {
//     "title":"notion doc",
//     "link":"sunnygmail"
       
//    }
// http://localhost:3000/api/v1/content

// headers me Authorization: token-- add krna hai jo ki signin ki request pr mila hai
app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const { link, type, title } = req.body;
    // Create a new content entry linked to the logged-in user.
    await ContentModel.create({
        link,
        type,
        title,
        //@ts-ignore
        userId: req.userId, // userId is added by the middleware.
        tags: [] // Initialize tags as an empty array.
    });

    res.json({ message: "Content added" }); // Send success response.
});

// Route 4: Get User Content
//yha pe bs get krna hai baki sare cridentials same hai 
app.get("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;  // User ID is fetched from middleware
    // Fetch all content associated with the user ID and populate username
    // The `populate` function is used to include additional details from the referenced `userId`.
    // For example, it will fetch the username linked to the userId.
    // Since we specified "username", only the username will be included in the result, 
    // and other details like password won’t be fetched. if hm only userId dalte to vo pura user collection fetch kr deta
    const content = await ContentModel.find({ userId: userId }).populate("userId", "username");
    res.json(content);  // Send the content as response jo ki datatbase me bna hai
});

// Route 5: Delete User Content sare cridentials same hai
//yha pe kuch nii kran delete selct kran hai postman me
app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    // Delete content based on contentId and userId.
    //@ts-ignore
    await ContentModel.deleteMany({ contentId, userId: req.userId });
    res.json({ message: "Deleted" }); // Send success response.
});

// Route 6: Share Content Link

// {
//     "share":true
//      }
// http://localhost:3000/api/v1/brain/share
// output-> {"hash":"rbvnetbdeu"}
app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const { share } = req.body;
    if (share) {
        // Check if a link already exists for the user.
        //@ts-ignore
        const existingLink = await LinkModel.findOne({ userId: req.userId });
        if (existingLink) {
            res.json({ hash: existingLink.hash }); // Send existing hash if found.
            return;
        }

        // Generate a new hash for the shareable link.
        const hash = random(10);
        //@ts-ignore
        await LinkModel.create({ userId: req.userId, hash });
        res.json({ hash }); // Send new hash in the response.
    } else {
        // Remove the shareable link if share is false.
        //@ts-ignore
        await LinkModel.deleteOne({ userId: req.userId });
        res.json({ message: "Removed link" }); // Send success response.
    }
});

// Route 7: Get Shared Content
// params me jake-->
// query params me hash likho
// phir path variable me hashed link likho
//ar baki khi likhne ki jrurat nii
//if params ne nii krna hai to directlr get request bhej do hash pe http://localhost:3000/api/v1/brain/rbvnetbdeu
app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;

    // Find the link using the provided hash.
    const link = await LinkModel.findOne({ hash });// await it because it ia a  database call
    if (!link) {
        res.status(404).json({ message: "Invalid share link" }); // Send error if not found.
        return;
    }

    // Fetch content and user details for the shareable link.
    const content = await ContentModel.find({ userId: link.userId });
    const user = await UserModel.findOne({ _id: link.userId });

    if (!user) {
        res.status(404).json({ message: "User not found" }); // Handle missing user case.
        return;
    }

    res.json({
        username: user.username,
        content
    }); // Send user and content details in response.
});
// //Why Only params Here?
// Route-Specific Data: The purpose of this endpoint is to process a specific shareable link identified by the :shareLink parameter in the URL. Hence, req.params is used to extract this unique identifier from the URL.
// Other Sources:
// Query Parameters (req.query): These are typically used for optional data that modifies or filters the request. For example, /api/v1/brain?sort=asc. This wasn't needed in your case.
// Body Data (req.body): Generally used for POST/PUT requests to send data to the server. This is not relevant for a GET request which is meant to fetch data.

// Start the server
app.listen(3000);