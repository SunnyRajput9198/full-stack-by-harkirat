"use strict";
// is project ko kese initialize kiya hai
// npm init -y
// npx tsc --init
// tsconfig.json me jake outdir and rootdir me jake dist and src add krdo
// package.json me jake "dev":"tsc -b && node ./dist/index.js"
// terminal me npm install ws @types/ws
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// app.get("/", (req, res) => {}); in express
//in websocket we use
// event handler
//ws://localhost:8080 in postman
// wss.on("connection",function(socket){
//     console.log("hi there");
//     setInterval(()=>{
//         socket.send("the cureent time is "+new Date().toLocaleTimeString());
//     },500);
//     // if vha se kuch msg aaya
//     socket.on("message",(e)=>{
//         console.log(e.toString());
//     })
// })
// if hm  message me postman se ping bhejege to pong return krega
wss.on("connection", function (socket) {
    console.log("hi there");
    setInterval(() => {
        socket.send("the cureent time is " + new Date().toLocaleTimeString());
    }, 500);
    // if vha se kuch msg aaya
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
        ;
    });
});
