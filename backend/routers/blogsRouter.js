import express from "express";

import { getAllBlogs, AddBlogs, UpdateBlogs, getById, deleteById, getUserId} from "../controllers/blogsController.js";

const blogsRouter = express.Router();

blogsRouter.get("/all", getAllBlogs);
blogsRouter.post("/add", AddBlogs);
blogsRouter.put("/update/:id", UpdateBlogs);
blogsRouter.get("/get/:id", getById);
blogsRouter.delete("/del/:id", deleteById);
blogsRouter.get("/user/:id", getUserId)

export default blogsRouter;