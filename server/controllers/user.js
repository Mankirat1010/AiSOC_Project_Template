const User = require('../models/User');
const { setUser } = require('../service/auth');
const bcrypt = require('bcrypt');

async function handleUserSignup(req, res) {
    try {
        const { name, email, password, role, rollNumber } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: "Email already in use" });

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            rollNumber: role === 'student' ? rollNumber : undefined,
        });

        // Automatically login after signup
        const token = setUser(newUser);
        res.cookie("uid", token, { httpOnly: true });
        return res.status(201).json({ message: "User registered successfully", user: { name: newUser.name, email: newUser.email, role: newUser.role } });

    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: "Error creating user" });
    }
}

async function handleUserLogin(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Compare hashed password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = setUser(user);
        res.cookie("uid", token, { httpOnly: true });
        return res.json({ message: "Login successful", user: { name: user.name, email: user.email, role: user.role } });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
};
