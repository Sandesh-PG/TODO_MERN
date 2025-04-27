import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'; // for password comparison
import jwt from 'jsonwebtoken'; // JWT for generating tokens



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

        const salt = await bcrypt.genSalt(10); // Generate salt with 10 rounds of salting
        const hashedPassword = await bcrypt.hash(req.body.password, salt); // Hash the password

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        
        await newUser.save();
        newUser.password = undefined;

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUser
        });
        
    } catch (error) {
        return res.status(500).json({message: `Something went wrong ${error}`});
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

        const payload = {
            userId: user._id,
            email: user.email
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn : '1hr'});

        res.status(200).json({
            success: true,
            message: "Login successful",
            token: token, // Send the token back to the user
        });
    } catch (error) {
        return res.status(500).json({message: `Something went wrong ${error}`});
    }
}

export { register, login }