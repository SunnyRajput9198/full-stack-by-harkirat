"use strict";
// Suppose when you make a UPI payment, the funds are deducted from one account and added to another.
// If the update happens in one account but not in the other, this is where transactions come into play.
// A transaction ensures that both accounts are updated, or neither account is updated to avoid inconsistencies.
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
// Similarly, transactions are useful for running a bunch of queries in sequence.
// For example, if a foreign key constraint is violated in one query, only part of the database will be updated.
// Instead of allowing partial updates, you wrap the queries in a transaction, ensuring they either all succeed or none execute.
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_o8lw5jdVmZSp@ep-floral-pond-a84eauue-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
// Creating an Express application instance
const app = (0, express_1.default)();
// Middleware to parse incoming JSON request bodies
app.use(express_1.default.json());
// Connecting to the PostgreSQL database
pgClient.connect();
// API endpoint for user signup
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Extracting user details from the request body
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
    try {
        // Ensuring the 'users' table exists, or creating it if not
        yield pgClient.query(`CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );`);
        // Ensuring the 'addresses' table exists, or creating it if not
        yield pgClient.query(`CREATE TABLE IF NOT EXISTS addresses (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                city VARCHAR(100) NOT NULL,
                country VARCHAR(100) NOT NULL,
                street VARCHAR(255) NOT NULL,
                pincode VARCHAR(20),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );`);
        // Query to insert user data into the 'users' table
        const insertQuery = `INSERT INTO users(username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        // Query to insert address data into the 'addresses' table
        const addressQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;
        // Start a database transaction
        yield pgClient.query("BEGIN;");
        // Insert user data and get the newly created user's ID
        const response = yield pgClient.query(insertQuery, [username, email, password]);
        const userId = response.rows[0].id; // Extract the user ID from the insert response
        // Insert address data linked to the user ID
        yield pgClient.query(addressQuery, [city, country, street, pincode, userId]);
        // Commit the transaction to make the changes permanent
        yield pgClient.query("COMMIT;");
        // Sending a success response to the client
        res.json({
            message: "You have signed up successfully",
        });
    }
    catch (error) {
        // Logging and handling errors
        console.log(error);
        // Rolling back the transaction if any query fails to prevent partial updates
        yield pgClient.query("ROLLBACK;");
        // Sending an error response to the client
        res.status(400).json({
            message: "Error while signing up",
        });
    }
}));
// Starting the server to listen on port 3000
app.listen(3000);
// Overall Code Explanation:
// This code sets up an Express server with an API endpoint for user signup. The user data (username, password, email)
// and address details (city, country, street, pincode) are inserted into the 'users' and 'addresses' tables in the PostgreSQL database.
// Transactions are used to ensure that either all operations (user and address insertions) are successfully performed
// or none of them are applied. This avoids scenarios where the user table is updated but the address table isn't,
// preventing inconsistent data states. If any error occurs, the transaction is rolled back, ensuring database integrity.
