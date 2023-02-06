import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    lastName:{
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    email:{
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password:{
        type: String,
        required: true,
        min: 8
    },
    picturePath:{
        type: String,
        default: ""
    },
    friends:{
        type: Array,
        default: []
    },
    location: String,
    profession: String,
    viewedProfile: Number,
    impressions: Number
}, {timestamps: true});               //provides dates of creation, updation,...

const User = new mongoose.model("User", UserSchema);

export default User;