const express = require("express");
const connectDB = require("./config/dbConfig");
const blogRouter = require("./routes/blogRoute");
const errorHandler = require("./middlewares/errorHandler");
const userRouter = require("./routes/userRoute");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/blogs", blogRouter);
app.use("/api/users", userRouter);

app.use(errorHandler);

module.exports = app;
