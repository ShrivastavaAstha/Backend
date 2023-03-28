const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  state: String,
  ElectricityBoard: String,
  CAnumber: Number,
  AccountNo: Number,
  AccountName: String,
  PaymentStatus: Boolean,
});

const billmodel = mongoose.model("bill", billSchema);
module.exports = billmodel;
