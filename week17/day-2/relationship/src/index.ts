//step-1  npm init -y
//step-2  npx tsc --init
//step-3  npm install 
//step 4  dev add kro in package.json
// step 5  outdir ko dist and rootdir ko src kro in tsconfig.json
import {Client} from "pg"//npm install pg @types/pg

const pgclient = new Client("postgresql://neondb_owner:npg_o8lw5jdVmZSp@ep-floral-pond-a84eauue-pooler.eastus2.azure.neon.tech/neondb?sslmode=require")

// Importing express for building the API
import express from "express";

// Creating an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Connecting to the PostgreSQL database
pgclient.connect();
// Route for handling user signup requests

//http://localhost:3000/signup
// {
//     "username":"gbqfeftytfyfregomfeu",
//     "email":"yrgmwferrail.com",
//     "password":144544483,
//     "city":"chdneanrh",
//     "country":"phpeferp",
//     "street":"gbafhghugued",
//     "pincode":2575858454483
// }
app.post("/signup", async (req, res) => {

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
        await pgclient.query(`
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
        await pgclient.query(`
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
        const insertResponse = await pgclient.query(insertQuery, [username, email, password]);
        const userId = insertResponse.rows[0].id;

        // Inserting address details into the 'addresses' table and associating them with the user ID
        const addressQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;
        const addressResponse = await pgclient.query(addressQuery, [city, country, street, pincode, userId]);
        
        // Sending a success response to the client
        res.json({
            message: "You have signed up successfully",
        });

    } catch (error) {
        // Logging any errors to the console
        console.log(error);  
        
        // Sending an error response to the client
        res.json({
            message: "Error while signing up",
        });
    }
});

// Starting the Express server on port 3000
app.listen(3000);