const bcrypt = require("bcrypt");
const User = require("../model/userModel");

async function login(req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user) {
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        // res.status(200).send("Login successful")
        console.log(`Password matched. Login successful!`);
        // req.session.user = user; // Store user in session
        res.redirect("/blog");
        //
      } else {
        res.send("Invalid username or password");
      }
    } else {
      res.send("User not found");
    }
  } catch (err) {
    console.error(`Error in login: ${err}`);
    res.status(500).send("Error in login");
  }
}

module.exports = login;
