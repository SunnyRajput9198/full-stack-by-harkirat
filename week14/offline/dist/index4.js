"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//api validation using zod
// npm install express @types/express zod--install it
// Importing necessary libraries
const zod_1 = require("zod"); // Zod for schema validation
const express_1 = __importDefault(require("express")); // Express for the web server
// Initializing the Express app
const app = (0, express_1.default)();
// Define the schema for profile update using Zod
const userProfileSchema = zod_1.z.object({
    name: zod_1.z.string().min(1), // Name must be a non-empty string
    email: zod_1.z.string().email(), // Email must be a valid email address
    age: zod_1.z.number().min(18).optional(), // Age is optional but must be 18 or older if provided
});
// Define the PUT endpoint for updating user data
app.put("/user", (req, res) => {
    // Safe parsing of the request body according to the defined schema
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody = req.body;
    // If the validation fails, return a 411 status code (Length Required)
    if (!success) {
        res.status(411).json({}); // Send empty response in case of validation failure
        return;
    }
    // Placeholder for updating the database with the validated data
    // Update the user in the database here using updateBody data
    // Respond with a success message after updating the user
    res.json({
        message: "User updated" // Send success message
    });
});
// Start the Express app on port 3000
app.listen(3000);
