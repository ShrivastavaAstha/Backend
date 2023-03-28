const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  AccountNo: Number,
  Name: String,
  Address: String,
  Branch: String,
  CIF: Number,
  MICRCode: Number,
  IFSCCode: String,
});

const accountmodel = mongoose.model("account", accountSchema);
module.exports = accountmodel;
