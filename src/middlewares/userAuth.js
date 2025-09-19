const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const userAuth = async (req, res, next) => {
  if (!req.header("Authorization")) {
    throw new Error("Please Login");
  }

  const token = req.header("Authorization").split(" ")[1];

  if (!token) {
    res.status(401);
    throw new Error("Please Authenticate via Login");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded._id);

  if (!user) {
    throw new Error("User Not Found, Token must be expired");
  }

  req.user = user;
  next();
};

module.exports = userAuth;
