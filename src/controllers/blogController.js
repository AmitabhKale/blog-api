const Blog = require("../models/blogSchema");

const getBlogs = async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).json({
    blogs,
  });
};

const createBlog = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user._id;

  const blog = await Blog.create({
    title,
    description,
    author: userId,
  });

  res.status(201).json(blog);
};

const updateBlogDetails = async (req, res) => {
  const { description } = req.body;
  const blogid = req.params.blogid;

  const blog = await Blog.findById(blogid);

  if (!blog) {
    throw new Error("BlogId not matched with records");
  }

  blog.description = description;

  await blog.save();

  res.status(200).json(blog);
};

const deleteBlog = async (req, res) => {
  const blogId = req.params.blogId;

  const blog = await Blog.findOneAndDelete({ _id: blogId });

  res.status(200).json({
    message: "Blog Deleted",
    blog,
  });
};

module.exports = {
  getBlogs,
  createBlog,
  updateBlogDetails,
  deleteBlog,
};
