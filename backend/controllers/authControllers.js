import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken'; 

const register = async (req, res) => {
    try {
        const email = req.body.email;
        
        if(!email){
            return res.status(404).json({success: false, message: "Email not found", data: null});
        }

        const userExists = await User.findOne({email: email});
        if(userExists){
            return res.status(400).json({success: false, message: "Email already exists"})
        }

        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(req.body.password, salt); 

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        
        await newUser.save();
        newUser.password = undefined;

        const token = jwt.sign(
            { id: newUser._id }, 
            process.env.JWT_SECRET, 
            { expiresIn: "7d" }
          );

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser,
            token: token
        });
        
    } catch (error) {
        return res.status(500).json({ success: false, message: `Something went wrong: ${error.message || error}`, data: null });
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(404).json({ success: false, message: "Email not found." });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({success: false, message: "Password is incorrect."});
        }
        const token = jwt.sign(
            { id: user._id }, 
            process.env.JWT_SECRET, 
            { expiresIn: "7d" }
          );
      
          user.password = undefined;
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: user,
            token: token, 
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: `Something went wrong: ${error.message || error}`, data: null });
    }
}

const logout = (req, res) => {
    res.status(200).json({ success: true, message: "Logged out successfully" });
};


export { register, login, logout }