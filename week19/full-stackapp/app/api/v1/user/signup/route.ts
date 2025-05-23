// Importing necessary modules from Next.js and Prisma
import { NextRequest, NextResponse } from 'next/server';
import {  PrismaClient } from '@prisma/client';
// import { Prisma } from '../../../../lib/db';


// try to use singleton prisma client in revision in place of this
// Initializing the Prisma client to interact with the database
const prismaClient = new PrismaClient();

/**
 * Handles the POST request for user signup.
 * Expects a JSON payload with `username` and `password`.
 */
// here req is a type of NextRequest
export async function POST(req: NextRequest) {
    // Parsing JSON data from the request body 
    // this will extract the body from the req 

    const data = await req.json();
    console.log(data);// yha pe username and password aa jaege
    try {
        // Creating a new user record in the database using Prisma
        await prismaClient.user.create({
            data: {
                username: data.username, // Storing the username
                password: data.password  // Storing the password (Note: Ideally, passwords should be hashed before saving)
            }
        });

        // Sending a success response
        return NextResponse.json({
            message: "You have signed up"
        });
    } catch (error) {
        // Logging the error to the console
        console.error("Error creating user:", error);

        // Sending an error response
        return NextResponse.json({
            message: "Failed to sign up",
        }, { status: 500 });
    }
}

/**
 * Handles the GET request to fetch the first user's data from the database.
 * Returns the username and email of the first user found.
 */
export async function GET() {
    // Retrieving the first user from the database
    const user = await prismaClient.user.findFirst({});
    
    // Returning the user's name and email in the response (Assuming email is stored in the username field)
    return Response.json({ name: user?.username, email: user?.username });
}