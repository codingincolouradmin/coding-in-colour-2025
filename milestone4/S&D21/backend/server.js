import express from "express";
import mongoose from "mongoose";
import feedbackRoutes from "./routes/feedbackRoutes.js"
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
    origin: "*",
}));

app.use(express.json());

app.use("/feedback",feedbackRoutes);

app.get("/", (req,res) =>{
    res.send("server is running");
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to mongoDB");
        app.listen(PORT,() => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.error("MongoDB connection error:",err);
    });


