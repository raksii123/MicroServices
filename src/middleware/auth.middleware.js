const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');


async function authMiddlewarer(req, res, next) {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log(decoded);

        
        const user = await userModel.findById(decoded.id);

        req.user = user;

        next();
        
    } catch (err) {
        console.error('Error in authMiddlewarer:', err);
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = {
    authMiddlewarer
}