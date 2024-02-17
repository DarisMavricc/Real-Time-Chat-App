import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    full_name: {
        type:String,
        required: [true, "Please add the Full Name"],
    },
    email: {
        type:String,
        required: [true,"Please add the user email address"],
        unique: [true,"Email address already taken"],
    },
    username: {
        type:String,
        required: [true,"Please add the Username"],
        unique: [true,"Username is already taken"],
    },
    password: {
        type:String,
        required:[true,"Please add the user password"],
    }
},
    {
        timestamps: true,
    }
);

export default mongoose.model('User',userSchema);