//step 1 npm init -y
//step 2 npm install prisma typescript
//step 3 npx tsc --init
// Change `rootDit` to `src`
// Change `outDir` to `dist`
//step 4 npx prisma init

import { PrismaClient } from "@prisma/client";
import express from "express";
const app = express();
app.use(express.json());
const client = new PrismaClient();
// Route to get all users from the database
// http://localhost:3000/users
app.get("/users", async (req, res) => {
    // Fetch all users from the 'user' table
    // The findMany function in Prisma is used to retrieve multiple records from your database that match the given filter criteria.
    const users = await client.users.findMany();
    // Send the fetched users as a JSON response
    res.json(users);
})

// Route to get a user's todos based on their ID
// http://localhost:3000/todos/1
app.get("/todos/:id", async (req, res) => {
    // Extract user ID from the URL parameter
    const id = req.params.id;
    // Find the user with the given ID and include their todos, username, and password
    // The findFirst function in Prisma is used to find the first record in the database that matches the given filter criteria
    const users = await client.users.findFirst({
        where: {
            id: parseInt(id) // Convert the ID from string to integer
        },
        select: {
            tods: true,  // Fetch the user's todos
            username: true, // Fetch the user's username
            password: true  // Fetch the user's password
        }
    });
    // Send the user data as a JSON response
    res.json(users);
})

async function createuser(){
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

    const user=await client.users.findFirst({
        where:{
            username:"chomu"
        },
        include:{
            tods:true
        }
    })
    console.log(user)
}

createuser()

app.listen(3000)

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