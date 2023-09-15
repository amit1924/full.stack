const bcrypt = require('bcrypt');
const User = require('../model/userModel');

async function register(req, res) {
    const { name, email, username, password } = req.body;

    try {
        // Check if user with the same email or username already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });

        if (existingUser) {
            return res.status(400).send('User with this email or username already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, username, password: hashedPassword });

        await user.save();

        res.redirect('/login?message=User+has+been+registered+Successfully');
    } catch (error) {
        res.status(500).send('Error in registering user');
    }
}

module.exports = register;
