import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const login = async(req, res) =>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ id: user._id }, "jwtkey");
        return res.status(200).json({ message: "Login success", token:token });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


export const register = async(req, res) =>{
    try {
        const {name, email, password} = req.body;

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = await new User({name, email, password:hashedPassword})
        await newUser.save()

        if(newUser) return res.status(201).json({message:"User created"})
    } catch (error) {
        if(error) return res.status(500).json({message:"Internal server error"})
    }
}