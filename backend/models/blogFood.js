
import mongoose from "mongoose";

const BlogFood = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true, 
    },
    category: {
        type: String,
        required: true,
        enum: ['Veg', 'NonVeg', 'Desserts', 'Salads', 'Soups', 'SeaFood', 'Cuisines', 'FastFood'], 
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0, // Price cannot be negative
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User", 
        required: true,
    },
}, {
    timestamps: true, 
});

export default mongoose.model("Blog", BlogFood);