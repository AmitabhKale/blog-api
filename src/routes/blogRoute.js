const {
  getBlogs,
  createBlog,
  updateBlogDetails,
  deleteBlog,
  getBlogById,
} = require("../controllers/blogController");
const userAuth = require("../middlewares/userAuth");

const blogRouter = require("express").Router();

blogRouter.get("/", getBlogs);
blogRouter.get("/:blogid", getBlogById);
blogRouter.post("/new", userAuth, createBlog);
blogRouter.put("/:blogid", userAuth, updateBlogDetails);
blogRouter.delete("/:blogid", userAuth, deleteBlog);

module.exports = blogRouter;
