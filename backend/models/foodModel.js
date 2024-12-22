import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    category: String,
    items: [
        {
            id: Number,
            image: String,
            title: String,
            description: String,
            price: Number,
        },
    ],
});

const Category = mongoose.model("Category", foodSchema);
export default Category;
