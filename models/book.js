const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: String,
  author: String,
  PublishingDate: String,
  Theme: String,
  ISBN: Number,
});

const bookmodel = mongoose.model("book", bookSchema);
module.exports = bookmodel;
