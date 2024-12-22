import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export const getAllUser = async(req, res) => {
    let users;

    try {
        users = await User.find()
    } catch (error) {
        console.log("Error", error);
    }

    if(!users) {
        return res.status(400).json({message:"No users Found"})
    }

    return res.status(200).json({message: "ALL users", users})
}

export const signUp = async(req, res)=> {
    const {name, email, password} = req.body;

    let existUsr;

    try {
        existUsr = await User.findOne({email});
    } catch (error) {
        console.log("Error", error);
    }

    if(existUsr) {
        return res.status(400).json({message:"User is already Registerd with this email"})
    }

    const hashPaswrd = bcrypt.hashSync(password);

    const user = new User({name, email, password:hashPaswrd, blogs:[]});

    try {
        await user.save();
    } catch (error) {
        console.log(error);
    }

    return res.status(201).json({message:"User is registered", user:user});
};

export const Login = async(req, res)=> {
    let exist;
    const {email, password} = req.body;

    try {
        exist = await User.findOne({email});
    } catch (error) {
        console.log(error)
    }

    if(!exist) {
        return res.status(404).json({message:"User email is Not Found"});
    }

    const comparePas = bcrypt.compareSync(password, exist.password);

    if(!comparePas) {
        return res.status(400).json({message:"incorrect Password"})
    }

    const accessToken = jwt.sign({id:exist._id, email:email, name:exist.name}, "jwt-secret", {expiresIn:"2m"});
    const refreshToken = jwt.sign({id:exist._id, email:email, name:exist.name}, "jwt-refresh", {expiresIn:"5m"});
    
    res.cookie("accessToken", accessToken, {secure:false, sameSite:'strict', maxAge:2*60*1000 });
    res.cookie("refreshToken", refreshToken, {secure:false, sameSite:'strict', maxAge:5*60*1000});
    return res.status(200).json({message:"Login Sucessful",id:exist._id, user:exist, token:{accessToken,refreshToken}});
}

export const authenticateToken = async(req, res)=> {
    try {
        const token = req.cookies?.accessToken

        if(!token) {
            return res.status(401).json({status:false, message:"Access Denined"})
        }
        try {
            const decode = jwt.verify(token, "jwt-secret");
            const user = await User.findById(decode.id);
            if(!user) {
                return res.status(404).json({ status: false, message: "User not found" });
            }
            return res.status(200).json({message:"Profile data retrived", data: {
                id:user._id,
                name:user.name,
                email:user.email,
                Login:true,
            }});

            
        } catch (error) {
            return res.status(402).json({status:false, message:"Something wrong", error:error.message})
        }        
    } catch (error) {
        return res.status(400).json({status:false, message:"Something went wrong", error:error.message})
    }
}

export const refreshToken = (req, res) => {
    try {
      const rtoken = req.cookies?.refreshToken;
  
      if (!rtoken) {
        return res.status(401).json({ message: "Refresh token missing" });
      }
  
      jwt.verify(rtoken, "jwt-refresh", (err, user) => {
        if (err) {
          console.error("Invalid or expired refresh token:", err.message);
          return res.status(403).json({ message: "Invalid or expired refresh token" });
        }

        const newAccessToken = jwt.sign({ id: user.id, email: user.email, name:user.name }, "jwt-secret", {
          expiresIn: "2m",
        });
  
        res.cookie("accessToken", newAccessToken, {
          httpOnly: true,
          secure: false, 
          sameSite: "strict",
          maxAge: 2 * 60 * 1000, 
        });
  
        return res.status(200).json({
          message: "New access token generated",
          accessToken: newAccessToken,
        });
      });
    } catch (error) {
      console.error("Unexpected error in refreshToken:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
};
   
export const Logout = (req, res) => {
    try {
        
        res.clearCookie("accessToken", {
            httpOnly:true,
            secure:false,
            sameSite: "strict",
            secure: false, // Ensure secure is true if using HTTPS
        });
        res.clearCookie("refreshToken", {
            httpOnly:true,
            secure:false,
            sameSite: "strict",
            secure: false,
        });

        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ message: "An error occurred during logout" });
    }
};
