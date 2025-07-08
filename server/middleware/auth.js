const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
    const token = req.cookies?.uid;

    if (!token) return res.status(401).json({ error: "Unauthorized, please login" });

    const user = getUser(token);
    if (!user) return res.status(401).json({ error: "Invalid or expired token" });

    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
    const token = req.cookies?.uid;
    const user = getUser(token);
    req.user = user || null;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth,
};
