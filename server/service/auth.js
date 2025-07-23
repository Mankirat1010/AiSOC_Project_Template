const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "Mankirat$1010"; // Use env in prod!

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
    }, secret, { expiresIn: '7d' });
}

function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};
