const express = require("express");
const connectDB = require("./config/dbConfig");
const blogRouter = require("./routes/blogRoute");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/blogs", blogRouter);

module.exports = app;
