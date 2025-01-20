const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "kirat123123";

const app = express();
app.use(express.json());

const users = [];

function logger(req, res, next) {
    console.log(req.method + " request came");
    next();
}

// localhost:3000
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", logger, function(req, res) {
    const username = req.body.username
    const password = req.body.password

    // Check if the user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({
            message: "Username already exists"
        });
    }

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You are signed up"
    });
})

app.post("/signin", logger, function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (!foundUser) {
        return res.status(400).json({
            message: "Credentials incorrect"
        });
    } else {
        const token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET);
        res.header("jwt", token);
        res.json({
            token: token
        });
    }
})

function auth(req, res, next) {
    const token = req.headers.token;
    try {
        const decodedData = jwt.verify(token, JWT_SECRET);

        if (decodedData.username) {
            req.username = decodedData.username;
            next();
        } else {
            res.status(401).json({
                message: "You are not logged in"
            });
        }
    } catch (error) {
        res.status(401).json({
            message: "Invalid token"
        });
    }
}

app.get("/me", logger, auth, function(req, res) {
    const currentUser = req.username;
    const foundUser = users.find(user => user.username === currentUser);

    if (foundUser) {
        res.json({
            username: foundUser.username
        });
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

