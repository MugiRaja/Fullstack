import bcyprt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import { assign } from "nodemailer/lib/shared/index.js";

// New User Register...
export const register = async (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        return res.json({success: false, message: 'Missing Details'});
    }

    try {
        const existingUser = await userModel.findOne({email});

        if(existingUser) {
            return res.json({success: false, message: 'User already exist'});
        }

        const hassedPassword = await bcyprt.hash(password, 10);

        const user = userModel({name, email, password: hassedPassword});
        await user.save();

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.json({success: true});
    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}

// Login...
export const login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.json({success: false, message: 'Missing Details'});
    }

    try {

        const user = await userModel.findOne({email});

        if(!user) {
            return res.json({success: false, message: 'No user found'});
        }

        const isMatch = await bcyprt.compare(password, user.password);

        if(!isMatch) {
            return res.json({success: false, message: 'Invalid Password'});
        }

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.json({success: true});

    } catch(error) {
        return res.json({success: false, message: error.message});
    }

}

// logout...
export const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        });
    
        return res.json({ success: true, message: "Logged Out" });
    } catch (error) {
    return res.json({ success: false, message: error.message });
    }
}

// Email OTP 
export const sendVerifyOtp = async (req, res) => {
    
    
}