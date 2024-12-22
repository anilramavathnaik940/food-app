import mongoose from "mongoose";

// mongoose.connect("mongodb+srv://gofoody:WQsPIU65Vt4lPeMi@cluster0.p4tma.mongodb.net/gofoody?retryWrites=true&w=majority&appName=Cluster0")
//     .then(()=> app.listen(port))
//     .then(() => console.log(`Connected to DataBase and Listening to Port ${port}`))
//     .catch((err) => console.log("Error is occured", err));

const MONGO_URI = "mongodb+srv://gofoody:WQsPIU65Vt4lPeMi@cluster0.p4tma.mongodb.net/gofoody?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); 
  }
};

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to the database");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

export default connectDB;
