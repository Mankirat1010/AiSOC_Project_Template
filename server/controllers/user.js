const User = require('../models/User');

const handleUserRegister = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    // Bad Request
    if(!name || !email || !password) {
        return res.status(400).json({ error: 'Please fill all details'});
    }

    // Check if user exists
    const existingUser = await User.findOne({ email: email });
    if(existingUser) return res.status(400).json({ error: 'User already exists'});

    // Create user 
    const user = new User({
        name: name,
        email: email,
        password: password,
        role: role
    });
    await user.save();

    res.status(201).json({ message: 'User registered successfully'});
}

module.exports = {
    handleUserRegister,
}
