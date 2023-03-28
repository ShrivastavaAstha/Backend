const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema({
  PNR: Number,
  Trn: Number,
  Date: String,
  Time: String,
  cls: String,
  boardingStation: String,
});

const ticketmodel = mongoose.model("ticket", ticketSchema);
module.exports = ticketmodel;
