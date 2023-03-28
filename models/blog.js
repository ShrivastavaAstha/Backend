const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  blogTitle: String,
  Date: Date,
  body: String,
});

const blogmodel = mongoose.model("blog", blogSchema);
module.exports = blogmodel;
