const express = require("express");
const connectDB = require("./config/dbConfig");

const app = express();

connectDB();

module.exports = app;
