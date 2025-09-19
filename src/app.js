const express = require("express");
const connectDB = require("./config/dbConfig");
const blogRouter = require("./routes/blogRoute");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/blogs", blogRouter);

app.use(errorHandler);

module.exports = app;
