const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  rollno: Number,
  class: Number,
  age: Number,
  school: String,
  contactno: Number,
});

const studentmodel = mongoose.model("student", studentSchema);
module.exports = studentmodel;
