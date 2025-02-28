import {Client} from "pg"
import express from "express"
const app = express()
const pgclient = new Client("postgresql://neondb_owner:npg_o8lw5jdVmZSp@ep-floral-pond-a84eauue-pooler.eastus2.azure.neon.tech/neondb?sslmode=require")
pgclient.connect()

app.use(express.json())//to parse the body
//in body
// {
// "username":"chomu",
// "email":"chomu@gmail.com"
//  "password":121212,
// }

app.post("/signup",async (req,res)=>{
    const {username,email,password} = req.body;
    // const sqlquery=`INSERT INTO users (username,email,password) VALUES ('${username}','${email}','${password}')`
    const sqlquery=`INSERT INTO users (username,email,password) VALUES ($1,$2,$3)`
    const response=await pgclient.query(sqlquery,[username,email,password])
    res.json({
        message:"signup successful"
    })
})

app.listen(3000)