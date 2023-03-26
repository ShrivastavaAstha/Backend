const express = require("express");
const mongoose = require("mongoose");
const app = express();

const DatabaseConnection = () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
      console.log("database connected");
    });
  } catch (error) {
    console.log(error);
  }
};

DatabaseConnection();
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
