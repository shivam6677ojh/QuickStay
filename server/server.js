import express from "express";
import "dotenv/config"
import mongoose from "mongoose"
import cors from "cors"
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clearWebhook from "./controllers/ClerkWebhooks.js";

connectDB();

const app = express();



app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Api to listen cleark webhooks
app.use("/api/clerk", clearWebhook);

app.get("/", (req, res) => {
    res.send("API is running fine")
    console.log("API is running fine")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});