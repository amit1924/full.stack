// const bcrypt = require('bcrypt');
// const User = require('../model/userModel');

// async function isAuthenticated(req, res, next) {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });

//     if (user) {
//       const match = await bcrypt.compare(password, user.password);

//       if (match) {
//         // If credentials are valid, proceed to the next middleware or route
//         return next();
//       }
//     }

//     // If credentials are not valid, redirect to login page
//     res.redirect('/login');
//   } catch (error) {
//     console.error(`Error in authentication: ${error}`);
//     res.status(500).send('Internal Server Error');
//   }
// }

// module.exports = isAuthenticated;
