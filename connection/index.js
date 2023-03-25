const express = require("express");
//const mongoose = require("mongoose"); //works as a middle ware b/w database and server
const app = express(); //it must be the topmost line of server

const { connectDatabase } = require("./connect");
// const connectDatabase = () => {
//   try {
//     mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
//       console.log("database connected");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

const a = connectDatabase();
console.log(a);
const PORT = 8000;
//second bottom
app.listen(PORT, () => {
  //bottom most line
  console.log(`Server is running at port ${PORT}`);
});
