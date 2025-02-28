"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws"); //// npm install ws @types/ws
//npm init -y
// npm install typescript
// npx tsc --init
//outdir me dist and rootdir me src
//package.jsone me jake add dev:"tsc -b && node dist/index.js"
// Create a WebSocket server instance listening on port 8080
const wss = new ws_1.WebSocketServer({ port: 8080 });
// Array to store all active WebSocket connections and their room assignments
let allSockets = [];
// Listen for new WebSocket connections
wss.on("connection", (socket) => {
    // Handle incoming messages from clients
    socket.on("message", (message) => {
        // Parse the incoming message from JSON string to object
        // @ts-ignore is used to bypass TypeScript type checking for the JSON.parse
        const parsedMessage = JSON.parse(message);
        // Handle 'join' message type - when a user wants to join a room
        // {
        //     "type": "join",
        //     "payload": {
        //       "roomId": "123"
        //     }
        //  }
        if (parsedMessage.type === "join") {
            // Add the new user to allSockets array with their socket and requested room
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId, // parsemessage is  a object parsedMessage.payload.roomId is a string user ki information hai
            });
        }
        // Handle 'chat' message type - when a user sends a chat message
        //{
        // "type": "chat",
        // "payload": {
        // 	"message": "hi there"
        // }
        // }
        if (parsedMessage.type === "chat") {
            // const currentUserRoom = allSockets.find(user => user.socket === socket).room;
            // OR
            // Find the room of the user who sent the message
            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket === socket) {
                    currentUserRoom = allSockets[i].room;
                }
            }
            // Broadcast the message to all users in the same room
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room === currentUserRoom) {
                    allSockets[i].socket.send(parsedMessage.payload.message);
                }
            }
        }
    });
});
