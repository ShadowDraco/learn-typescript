"use strict";
// import express and its types
import express from "express";
export const app = express();
import cors from "cors";
import { Server } from "socket.io";
// create socket server
import http from "http";
export const server = http.createServer(app);
export const io = new Server();
// use global middleware
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.status(200).send("Home Route!");
});
io.on("connection", (socket) => {
    console.log("a user connected");
});
// export start function to call it at proper time
export const start = (port) => {
    server.listen(port, () => {
        console.log("Listening on port: ", port, " with socket on");
    });
};
