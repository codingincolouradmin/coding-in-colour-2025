import mongoose from "mongoose";


const feedbackScheema = new mongoose.Schema({
    name: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.model("Feedback",feedbackScheema);