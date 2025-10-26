import express from "express";
import "dotenv/config"
import mongoose from "mongoose"
import cors from "cors"


const app = express();


app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("API is running fine")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
});