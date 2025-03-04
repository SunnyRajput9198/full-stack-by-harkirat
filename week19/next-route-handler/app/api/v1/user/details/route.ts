import { NextResponse } from "next/server"; // Importing NextResponse for creating API responses

// Function to handle GET requests
export function GET() {
    return NextResponse.json({
        name: "harkirat get",
        email: "harkirat@gmail.com"
    });
}

// Function to handle POST requests
export function POST() {
    return NextResponse.json({
        name: "harkirat post ",
        email: "harkirat@gmail.com"
    });
}
export function PUT() {
    return NextResponse.json({
        name: "harkirat put",
        email: "harkirat@gmail.com"
    });
}

// http://localhost:3000/api/v1/user/details
/*
Notes:
When there are multiple functions in a module, the default export cannot be used. 
In such cases, we use named exports and import them like this: 
--- import { GET } from '.api/v1/user'

However, if there is only one function, we can use default export and import it like this: 
--- import GET from ".api/v1/user"
*/