"use strict";

// import express and its types
import express, { Express, Request, Response } from "express";
export const app: Express = express();
import cors from "cors";
// import socket stuff
import {
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData,
} from "../socket/types.js";
import { Server } from "socket.io";

// create socket server
import http from "http";
export const server = http.createServer(app);

export const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>();

// use global middleware
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Home Route!");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

// export start function to call it at proper time
export const start = (port: any) => {
  server.listen(port, () => {
    console.log("Listening on port: ", port, " with socket on");
  });
};
