const {
  register,
  login,
  getMyDetails,
} = require("../controllers/userController");
const userAuth = require("../middlewares/userAuth");

const userRouter = require("express").Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/profile/me", userAuth, getMyDetails);

module.exports = userRouter;
