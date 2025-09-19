const { getBlogs } = require("../controllers/blogController");

const blogRouter = require("express").Router();

blogRouter.get("/", getBlogs);

module.exports = blogRouter;
