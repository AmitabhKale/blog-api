const {
  getBlogs,
  createBlog,
  updateBlogDetails,
  deleteBlog,
} = require("../controllers/blogController");

const blogRouter = require("express").Router();

blogRouter.get("/", getBlogs);
blogRouter.post("/new", createBlog);
blogRouter.put("/:blogid", updateBlogDetails);
blogRouter.delete("/:blogid", deleteBlog);

module.exports = blogRouter;
