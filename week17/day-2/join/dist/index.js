"use strict";
// step-1 npm insitn -y
// step-2 npx tsc --init
// step-3 npm install
// step-4 package.json me dev:tsc -b && node ./dist/index.js
// tsconfig.json me jake outdir and rootdir
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
// Importing the Client class from the "pg" (node-postgres) library for interacting with PostgreSQL
const pg_1 = require("pg");
// Importing the Express framework for building a web server
const express_1 = __importDefault(require("express"));
// Initializing the Express application
const app = (0, express_1.default)();
// Middleware to parse JSON request bodies, enabling the server to read incoming JSON payloads
app.use(express_1.default.json());
// Creating a PostgreSQL client instance with the database connection string
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_o8lw5jdVmZSp@ep-floral-pond-a84eauue-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
// Connecting to the PostgreSQL database
pgClient.connect();
// Setting up a POST endpoint for user signup
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Extracting user data from the request body
    const username = req.body.username; // Username provided by the user
    const password = req.body.password; // Password provided by the user
    const email = req.body.email; // Email address provided by the user
    const city = req.body.city; // City provided by the user
    const country = req.body.country; // Country provided by the user
    const street = req.body.street; // Street provided by the user
    const pincode = req.body.pincode; // Pincode provided by the user
    try {
        // SQL query to insert user data into the "users" table and return the generated user ID
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        // Executing the query with parameterized inputs to prevent SQL injection
        const insertResponse = yield pgClient.query(insertQuery, [
            username,
            email,
            password,
        ]);
        // Extracting the generated user ID from the query response
        const userId = insertResponse.rows[0].id;
        // SQL query to insert address data into the "addresses" table, associating it with the user ID
        const addressQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;
        // Executing the query with parameterized inputs
        yield pgClient.query(addressQuery, [
            city,
            country,
            street,
            pincode,
            userId,
        ]);
        // Sending a success response to the client
        res.json({
            message: "You have signed up successfully", // Success message sent to the client
        });
    }
    catch (error) {
        // Logging any errors that occur during database operations
        console.log(error);
        // Sending an error response to the client
        res.json({
            message: "Error while signing up", // Error message sent to the client
        });
    }
}));
//bad approach using 2 queries or separate queries
app.get("/meta", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    // Fetch user details
    const userDetailsQuery = "SELECT id, username, email FROM users WHERE id = $1";
    const userDetails = yield pgClient.query(userDetailsQuery, [id]);
    // Fetch user address
    const userAddressQuery = "SELECT city, country, street, pincode FROM addresses WHERE user_id = $1";
    const userAddress = yield pgClient.query(userAddressQuery, [id]);
    res.json({ userDetails: userDetails.rows[0], userAddress: userAddress.rows });
}));
// Setting up a GET endpoint to retrieve metadata about a user
app.get("/meta-data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extracting the user ID from the query parameters
        const id = req.query.id;
        // SQL query to fetch user and address details using a JOIN between "users" and "addresses" tables
        const query = `
            SELECT 
                users.id, 
                users.username, 
                users.email, 
                addresses.city, 
                addresses.country, 
                addresses.street, 
                addresses.pincode 
            FROM users 
            JOIN addresses ON users.id = addresses.user_id 
            WHERE users.id = $1;`;
        // Executing the query with the provided user ID
        const response = yield pgClient.query(query, [id]);
        // Sending the fetched data as a JSON response
        res.json(response.rows);
    }
    catch (error) {
        // Logging any errors during the metadata retrieval process
        console.log(error);
        // Sending an error response to the client
        res.status(500).json({
            message: "Error fetching metadata", // Error message sent to the client
        });
    }
}));
// Starting the Express server on port 3000
app.listen(3000);
// For Output use this: http://localhost:3000/meta-data?id=1
//on chrome
/*
WORKFLOW EXPLANATION:

1. Server Setup
   - Import necessary libraries (pg for PostgreSQL and express for building a server).
   - Initialize an Express application and set up middleware to parse JSON request bodies.
   - Connect to a PostgreSQL database using the provided connection string.

2. User Signup Endpoint (/signup)
   - Receives user details (username, email, password, and address fields) via a POST request.
   - Inserts user data (username, email, password) into the users table and retrieves the generated user ID.
   - Inserts address data (city, country, street, pincode) into the addresses table, associating it with the retrieved user ID.
   - Sends a success message to the client if all operations complete successfully.
   - Handles errors and sends an error message if any database operation fails.

3. Metadata Retrieval Endpoint (/meta-data)
   - Accepts a user ID via query parameters in a GET request.
   - Fetches user details (username, email) and associated address details (city, country, street, pincode) using a SQL JOIN query.
   - Sends the retrieved data as a JSON response to the client.
   - Handles errors and sends an error message if metadata retrieval fails.

4. Error Handling
   - Catches database errors during both user signup and metadata retrieval.
   - Logs errors for debugging and provides appropriate responses to the client.

5. Server Start
   - Starts the Express server on port 3000.
   - Logs a message indicating the server is running and provides the base URL for testing.
*/
