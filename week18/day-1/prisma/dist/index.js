"use strict";
//step 1 npm init -y
//step 2 npm install prisma typescript
//step 3 npx tsc --init
// Change `rootDit` to `src`
// Change `outDir` to `dist`
//step 4 npx prisma init
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
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const client = new client_1.PrismaClient();
// Route to get all users from the database
// http://localhost:3000/users
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Fetch all users from the 'user' table
    const users = yield client.users.findMany();
    // Send the fetched users as a JSON response
    res.json(users);
}));
// Route to get a user's todos based on their ID
app.get("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Extract user ID from the URL parameter
    const id = req.params.id;
    // Find the user with the given ID and include their todos, username, and password
    const users = yield client.users.findFirst({
        where: {
            id: parseInt(id) // Convert the ID from string to integer
        },
        select: {
            tods: true, // Fetch the user's todos
            username: true, // Fetch the user's username
            password: true // Fetch the user's password
        }
    });
    // Send the user data as a JSON response
    res.json(users);
}));
function createuser() {
    return __awaiter(this, void 0, void 0, function* () {
        //  await client.users.create({
        //     data:{
        //         username:"chomu",
        //         email:"chomu@gmail.com",
        //         password:"121212"
        //     }
        // })
        // await client.users.update({
        //     where:{
        //         username:"chomu"
        //     },
        //     data:{
        //         city:"delhi"
        //     }
        // })
        // await client.users.delete({
        //     where:{
        //         username:"chomu"
        //     }
        // })
        const user = yield client.users.findFirst({
            where: {
                username: "chomu"
            },
            include: {
                tods: true
            }
        });
        console.log(user);
    });
}
createuser();
app.listen(3000);
/*
Function to create multiple users in the database
The function uses Prisma's createMany method to insert multiple user records at once
Each user has properties like username, password, age, and city
async function createUser() {
  
    await client.user.createMany({
        data: [{
            username: "Alice", // Username of the first user
            password: "1234",   // Password of the first user
            age: 20,            // Age of the first user
            city: "New York"    // City of the first user
        },
        {
            username: "Bob",    // Username of the second user
            password: "12345",  // Password of the second user
            age: 25,            // Age of the second user
            city: "San Francisco" // City of the second user
        }]
    })
}
createUser();

Function to delete a user from the database based on their ID
This uses Prisma's delete method to remove a user
async function deleteUser() {
  
    await client.user.delete({
        where: {
            id: 1 // ID of the user to delete (in this case, user with ID 1)
        }
    })
}
deleteUser();

Function to update an existing user's data in the database
It uses Prisma's update method to modify a user's information
async function UpdateUser() {
  
    await client.user.update({
        where: {
            id: 1 // Find the user with ID 1
        },
        data: {
            username: "GKSingh", // Update the user's username to "GKSingh"
        }
    })
}
UpdateUser();

*/ 
