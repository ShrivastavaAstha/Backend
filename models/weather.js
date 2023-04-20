const mongoose = require("mongoose");
const weatherSchema = new mongoose.Schema({
  Country: String,
  City: String,
  Date: String,
  Temperature: String,
  Weather: String,
  Precipitation: Number,
  Pressure: Number,
  Humidity: Number,
});

const weathermodel = mongoose.model("weather", weatherSchema);
module.exports = weathermodel;
