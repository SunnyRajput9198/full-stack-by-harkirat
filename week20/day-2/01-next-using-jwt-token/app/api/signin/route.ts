
import jwt from "jsonwebtoken"; 
import { NextRequest, NextResponse } from "next/server";

export const SECRET_KEY = "mai nhi btayunga"; // This key is used to sign and verify the JWT

// Define the POST handler function
export async function POST(req: NextRequest) {
    // Parse the JSON body of the incoming request
    const body = await req.json(); // The body contains the data sent by the client in the POST request

    // Destructure the username and password fields from the request body
    const { username, password } = body; // Extract username and password from the request body

    // In a real application, validate the username and password against a database
    // Here, we hardcode a dummy user ID
    const userId = 1; // This is a placeholder. In a real scenario, fetch the user ID from the database.

    // Generate a JWT token using the user ID and secret key
    const token = jwt.sign(
        { userId }, // Payload containing user information
        SECRET_KEY 
    ); // The token encodes the userId and is signed for security.

    // Return the generated token in the response
    return NextResponse.json({
        token,
    });
}