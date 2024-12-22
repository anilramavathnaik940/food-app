import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
        name: {
            type:String,
            required:[true, "Name is required"]
        },
        email : {
            type:String,
            required:[true, 'Email is required'],
            unique:true
        },
        password: {
            type:String,
            required:[true, 'Email is required']
        },


        blogs:[{
            type:mongoose.Types.ObjectId,
            ref:"Blog",
            require:true
        }]
    }, 
    {
        timestamps:true
    }
);

export default mongoose.model("User", UserSchema);
