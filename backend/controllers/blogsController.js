import mongoose from "mongoose";
import Blog from "../models/blogFood.js";
import User from "../models/userModel.js";

export const getAllBlogs = async(req, res)=> {
    let blogs;

    try {
        blogs = await Blog.find();
    } catch (error) {
        console.log("Error", error)   
    }

    if(!blogs) {
        return res.status(404).json({message:"No Blogs are found"})
    }

    return res.status(200).json({blogs});
}

export const AddBlogs = async(req, res)=> {
    const {category,title, description, price, image, user} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(user)) {
        return res.status(400).json({ message: "Invalid user ID format" });
    }
    
    let exist;

    try {
        exist = await User.findById(user);
    } catch (error) {
        return console.log(error);
    }
    
    if(!exist) {
        return res.status(400).json({message:"Unable to find By Id"});
    }

    const blog = new Blog({
        title, description, price, image, user, category
    });

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({session});
        exist.blogs.push(blog);

        await exist.save({session});
        await session.commitTransaction();

    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({message: error})
    }

    return res.status(201).json({meassage:"Blog Added Successfully....", blog});
}

export const UpdateBlogs = async(req, res) => {

    const{title, description, price, image} = req.body;

    const id = req.params.id;

    let blog;

    try {
        blog = await Blog.findByIdAndUpdate(id, {
            title, description, price, image
        })
    } catch (error) {
        return console.log("This is Blog Error", {message:error.meassage})
    }

    if(!blog) {
        return res.status(500).json({message:"Unable to Update Blog"});
    }
    return res.status(200).json({message:"Updated Blog Successfully", blog})
}

export const getById = async(req, res) => {
    const id = req.params.id;

    let blog;

    try {
        blog = await Blog.findById(id);
    } catch (error) {
        return console.log("Error", error);
    }

    if(!blog) {
        return res.status(404).json({message:"No Blog Found"});
    }

    return res.status(200).json({message:"Get By Id", blog})
}

export const deleteById = async(req, res) => {
    let deleteId = req.params.id;

    let blog;

    try {
        //blog = await Blog.findByIdAndDelete(deleteId);
        blog = await Blog.findByIdAndDelete(deleteId).populate("user");
        await blog.user.blogs.pull(blog);

        await blog.user.save();

    } catch (error) {
        return console.log("Error", error)
    }

    if(!blog) {
        return res.status(500).json({message:"No Blog is found on This"});
    }

    return res.status(200).json({message:"Deleted SuccessFully"});
}

export const getUserId = async(req, res)=> {
    const userId = req.params.id;

    let userBlogs;

    try {
        userBlogs = await User.findById(userId).populate("blogs");
    } catch (err) {
        return console.log(err);
    }

    if(!userBlogs) {
        return res.status(404).json({message:"No Blogs found on this User Id"});
    }

    return res.status(200).json({meassage:"Users Blogs", blogs:userBlogs});
}