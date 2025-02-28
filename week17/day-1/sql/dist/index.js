"use strict";
//step-1 -npm init -y
//step-2 -npx tsc --init
//step-3 -npm install 
//step 4  npm install pg @types/pg
//step 5 package.json me jake dev:tsc-b && node dist/index.js 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgclient = new pg_1.Client("postgresql://neondb_owner:npg_o8lw5jdVmZSp@ep-floral-pond-a84eauue-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
const pgclient2 = new pg_1.Client({
    user: "neondb_owner",
    host: "ep-floral-pond-a84eauue-pooler.eastus2.azure.neon.tech",
    password: "npg_o8lw5jdVmZSp",
    port: 5432,
    database: "neondb", // ensures the connection uses SSL for security.
    ssl: true
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgclient.connect();
        // SQL query to create a new table called 'users' with specific columns.
        //   await pgclient.query(`
        //     CREATE TABLE users (
        //         id SERIAL PRIMARY KEY,
        //         username VARCHAR(50) UNIQUE NOT NULL, 
        //         email VARCHAR(255) UNIQUE NOT NULL, 
        //         password VARCHAR(255) NOT NULL, 
        //         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        //     );
        // `);
        // SQL query to insert a new user record into the 'users' table.
        // await pgclient.query(`
        //     INSERT INTO users (username, email, password)
        //     VALUES ('Rohan Dev', 'rohan@gmail.com', '123456789')
        // `);
        // // SQL query to insert another user record into the 'users' table.
        // await pgclient.query(`
        //     INSERT INTO users (username, email, password)
        //     VALUES ('Gaurav', 'gaurav@gmail.com', '987654321')
        // `);
        // SQL query to update the password of a user based on the given email condition.
        yield pgclient.query(`
        UPDATE users SET password = '123456789'
        WHERE id = '2'; 
    `);
        // SQL query to delete a user record based on the provided ID condition.
        // await pgclient.query(`
        //     DELETE FROM users
        //     WHERE id = 1;
        // `);
        const res = yield pgclient.query(`SELECT * FROM users`);
        console.log(res.rows);
    });
}
main();
