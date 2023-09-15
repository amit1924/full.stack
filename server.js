const express = require("express");
const mongoose = require("mongoose");
const registerController = require("./controllers/registerController");
const loginController = require("./controllers/loginController");
require("dotenv").config();
// const isAuthenticated = require('./middleware/authMiddleware');
// const session = require('express-session');

const app = express();
const PORT = 3000;

// Add body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add session middleware
// app.use(session({
//   secret: 'your-secret-key', // Change this to a random, secure string
//   resave: false,
//   saveUninitialized: true,
// }));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Serve static files like CSS
 app.use(express.static("public"));
// console.log(pub)


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.post("/register", registerController);
app.post("/login", loginController);

// Blog route with authentication check
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
