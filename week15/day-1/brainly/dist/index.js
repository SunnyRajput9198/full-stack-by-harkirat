"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//step 1-npm install -d typescript
//step 2-npx tsc --init
//  ts.config.json me jake outdir ko dist kro and rootdir ko src
//step 3-npm install express// it uses require which is used in js in typescript we use import so 
//step 3-npm install @types/express
//tsc-b-> to compile ts to js
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); //npm install @types/jsonwebtoken
const cors_1 = __importDefault(require("cors"));
const utils_1 = require("./utils"); //import kro
const middleware_1 = require("./middleware");
const db_1 = require("./db");
// package.json me jao usmem build,start,dev add kiya hai script me
// sbse phle npm insatll krdo uskko if error de to @types/  lgado ar phir usko import kro
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware to parse JSON request bodies.//to parse the body
app.use((0, cors_1.default)()); // Middleware to allow cross-origin requests.
// Route 1: User Signup
//{
//     "username":"sunnyrajputiji",
//     "password":"123456"
//    }
// http://localhost:3000/api/v1/signup
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Use zod or a similar library for input validation.
    // TODO: Hash the password before storing it in the database.
    const username = req.body.username;
    const password = req.body.password;
    try {
        // Create a new user with the provided username and password.
        yield db_1.UserModel.create({ username, password });
        res.json({ message: "User signed up" }); // Send success response.
    }
    catch (e) {
        // Handle errors like duplicate usernames.
        res.status(409).json({ message: "User already exists" }); // Conflict status.
    }
}));
// Route 2: User Signin
// {
//     "username":"sunnyrajputiji",
//     "password":"123456"
//    }
// http://localhost:3000/api/v1/signin
//it returns a token
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    // Find a user with the provided credentials.
    const existingUser = yield db_1.UserModel.findOne({ username, password });
    if (existingUser) {
        // Generate a JWT token with the user's ID.
        //yha pr ye _id user ki object_id hai
        const token = jsonwebtoken_1.default.sign({ id: existingUser._id }, middleware_1.jwt_secret);
        res.json({ token }); // Send the token in response.
    }
    else {
        // Send error response for invalid credentials.
        res.status(403).json({ message: "Incorrect credentials" });
    }
}));
// Route 3: Add Content
// {
//     "title":"notion doc",
//     "link":"sunnygmail"
//    }
// http://localhost:3000/api/v1/content
// headers me Authorization: token-- add krna hai jo ki signin ki request pr mila hai
app.post("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { link, type, title } = req.body;
    // Create a new content entry linked to the logged-in user.
    yield db_1.ContentModel.create({
        link,
        type,
        title,
        //@ts-ignore
        userId: req.userId, // userId is added by the middleware.
        tags: [] // Initialize tags as an empty array.
    });
    res.json({ message: "Content added" }); // Send success response.
}));
// Route 4: Get User Content
//yha pe bs get krna hai baki sare cridentials same hai 
app.get("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId; // User ID is fetched from middleware
    // Fetch all content associated with the user ID and populate username
    // The `populate` function is used to include additional details from the referenced `userId`.
    // For example, it will fetch the username linked to the userId.
    // Since we specified "username", only the username will be included in the result, 
    // and other details like password won’t be fetched. if hm only userId dalte to vo pura user collection fetch kr deta
    const content = yield db_1.ContentModel.find({ userId: userId }).populate("userId", "username");
    res.json(content); // Send the content as response jo ki datatbase me bna hai
}));
// Route 5: Delete User Content sare cridentials same hai
//yha pe kuch nii kran delete selct kran hai postman me
app.delete("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    // Delete content based on contentId and userId.
    //@ts-ignore
    yield db_1.ContentModel.deleteMany({ contentId, userId: req.userId });
    res.json({ message: "Deleted" }); // Send success response.
}));
// Route 6: Share Content Link
app.post("/api/v1/brain/share", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { share } = req.body;
    if (share) {
        // Check if a link already exists for the user.
        //@ts-ignore
        const existingLink = yield db_1.LinkModel.findOne({ userId: req.userId });
        if (existingLink) {
            res.json({ hash: existingLink.hash }); // Send existing hash if found.
            return;
        }
        // Generate a new hash for the shareable link.
        const hash = (0, utils_1.random)(10);
        //@ts-ignore
        yield db_1.LinkModel.create({ userId: req.userId, hash });
        res.json({ hash }); // Send new hash in the response.
    }
    else {
        // Remove the shareable link if share is false.
        //@ts-ignore
        yield db_1.LinkModel.deleteOne({ userId: req.userId });
        res.json({ message: "Removed link" }); // Send success response.
    }
}));
// Route 7: Get Shared Content
app.get("/api/v1/brain/:shareLink", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = req.params.shareLink;
    // Find the link using the provided hash.
    const link = yield db_1.LinkModel.findOne({ hash });
    if (!link) {
        res.status(404).json({ message: "Invalid share link" }); // Send error if not found.
        return;
    }
    // Fetch content and user details for the shareable link.
    const content = yield db_1.ContentModel.find({ userId: link.userId });
    const user = yield db_1.UserModel.findOne({ _id: link.userId });
    if (!user) {
        res.status(404).json({ message: "User not found" }); // Handle missing user case.
        return;
    }
    res.json({
        username: user.username,
        content
    }); // Send user and content details in response.
}));
// Start the server
app.listen(3000);
