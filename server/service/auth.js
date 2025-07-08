const jwt = require("jsonwebtoken");
const secret = "Mankirat$1010"; // Keep this secret safe in env variables in production!

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
    }, secret, { expiresIn: '7d' }); // token valid for 7 days
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
