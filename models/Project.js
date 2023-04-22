const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  Project_Name: String,
  Start_Date: String,
  End_Date: String,
  No_of_members: Number,
});
const projectmodel = mongoose.model("project", projectSchema);
module.exports = projectmodel;
