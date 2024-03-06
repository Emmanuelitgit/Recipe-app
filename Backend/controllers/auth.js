import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const login = async(req, res) =>{
    try {
        const {email, password} = req.bod
        const user = await User.findOne({email})
    } catch (error) {
        console.log(error)
    }
}

export const register = async(req, res) =>{
    try {
        const {name, email, password} = req.body

        const newUser = await new User({name, email, password})
        await newUser.save()

        if(newUser) return res.status(201).json({message:"User created"})
    } catch (error) {
        if(error) return res.status(500).json({message:"Internal server error"})
    }
}