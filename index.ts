"use strict";

// require dotenv and grab the port
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
// get the start function from the server
import { start } from "./src/server.js";

// Start the server on given port

start(PORT);
