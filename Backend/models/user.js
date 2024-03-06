import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userShema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },

}, {timestamps:true});



export const User = mongoose.model("User", userShema)