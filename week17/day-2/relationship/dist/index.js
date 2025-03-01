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
//step-1  npm init -y
//step-2  npx tsc --init
//step-3  npm install 
//step 4  dev add kro in package.json
// step 5  outdir ko dist and rootdir ko src kro in tsconfig.json
const pg_1 = require("pg"); //npm install pg @types/pg
const pgclient = new pg_1.Client("postgresql://neondb_owner:npg_o8lw5jdVmZSp@ep-floral-pond-a84eauue-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
// Importing express for building the API
const express_1 = __importDefault(require("express"));
// Creating an Express application
const app = (0, express_1.default)();
// Middleware to parse JSON request bodies
app.use(express_1.default.json());
// Connecting to the PostgreSQL database
pgclient.connect();
// Route for handling user signup requests
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
        // Creating the 'users' table to store user details if it doesn't exist already
        yield pgclient.query(`
            CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
        // Creating the 'addresses' table to store user address details
        // The 'user_id' column is a foreign key referencing the 'id' column of the 'users' table
        // 'ON DELETE CASCADE' ensures that deleting a user also deletes their associated address
        yield pgclient.query(`
            CREATE TABLE IF NOT EXISTS addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );
        `);
        // Inserting user details into the 'users' table and returning the newly created user's ID
        const insertQuery = `INSERT INTO users(username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        const insertResponse = yield pgclient.query(insertQuery, [username, email, password]);
        const userId = insertResponse.rows[0].id;
        // Inserting address details into the 'addresses' table and associating them with the user ID
        const addressQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;
        const addressResponse = yield pgclient.query(addressQuery, [city, country, street, pincode, userId]);
        // Sending a success response to the client
        res.json({
            message: "You have signed up successfully",
        });
    }
    catch (error) {
        // Logging any errors to the console
        console.log(error);
        // Sending an error response to the client
        res.json({
            message: "Error while signing up",
        });
    }
}));
// Starting the Express server on port 3000
app.listen(3000);
