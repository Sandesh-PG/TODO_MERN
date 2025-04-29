import jwt from 'jsonwebtoken';

const authenticateUser = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Assuming Bearer token format
    
    if (!token) {
        return res.status(403).json({ success: false, message: "Token missing" });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
        
    } catch (err) {
        return res.status(403).json({ success: false, message: "Invalid token", error: err.message });
    }
};

export default authenticateUser;
