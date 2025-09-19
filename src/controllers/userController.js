const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email) {
    throw new Error("Name and Email are required properties");
  }

  const hash = await bcrypt.hash(password, 8);

  const user = new User({
    name,
    email,
    password: hash,
  });

  await user.save();

  const token = await user.generateJWTtoken();

  res.status(201).json({
    message: "User Registered",
    token,
    user,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Email and Password are required fields");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("No User Found ");
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }

  let token = await user.generateJWTtoken();
  res.status(200).json({
    message: "Logged In",
    token,
    user,
  });
};

module.exports = {
  register,
  login,
};
