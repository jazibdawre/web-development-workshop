const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.auth = async (req, res, next) => {
    try {
        //Get the token from the header
        const token = req.header('auth-token');

        //Check if not token
        if (!token) {
            return res.status(401).json({ msg: 'No token, authorization denied' });
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findById(decoded.user.id);
        req.user = user;
        next();
    } catch(err) {
        return res.status(401).json({ msg: 'Authorization failed' });
    }
}