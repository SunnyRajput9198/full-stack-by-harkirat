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
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const pgclient = new pg_1.Client("postgresql://neondb_owner:npg_o8lw5jdVmZSp@ep-floral-pond-a84eauue-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
pgclient.connect();
app.use(express_1.default.json()); //to parse the body
//in body
// {
// "username":"chomu",
// "email":"chomu@gmail.com"
//  "password":121212,
// }
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    // const sqlquery=`INSERT INTO users (username,email,password) VALUES ('${username}','${email}','${password}')`
    const sqlquery = `INSERT INTO users (username,email,password) VALUES ($1,$2,$3)`;
    const response = yield pgclient.query(sqlquery, [username, email, password]);
    res.json({
        message: "signup successful"
    });
}));
app.listen(3000);
