import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            trim: true
        },
        image: {
            type: String, // base64 or URL
        }
    },
     { timestamps: true }

);


export default mongoose.model("User",userSchema);