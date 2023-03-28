const express = require("express");
//const mongoose = require("mongoose"); //works as a middle ware b/w database and server
const app = express(); //it must be the topmost line of server

const { connectDatabase } = require("./connection/connect");
const USER_MODEL = require("./models/User");
const ACCOUNT_MODEL = require("./models/account");
app.use(express.json());
app.post("/api/connectdata", async (req, res) => {
  try {
    console.log(req.body);

    const newobject = {
      name: req.body.username,
      rollNo: req.body.userrollNo,
      branch: req.body.userBranch,
      age: req.body.userAge,
      isFresher: req.body.fresher,
    };
    console.log(newobject);

    const userData = new USER_MODEL(newobject);
    await userData.save();

    return res.json({ success: true, message: "Data connected" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.post("/api/accountdata", async (req, res) => {
  try {
    const accobj = {
      AccountNo: req.body.userAccountno,
      Name: req.body.userName,
      Address: req.body.userAddress,
      Branch: req.body.userBranch,
      CIF: req.body.userCIF,
      MICRCode: req.body.userMICRCode,
      IFSCCode: req.body.userIFSCCode,
    };
    console.log(accobj);

    const accData = new ACCOUNT_MODEL(accobj);
    await accData.save();

    return res.status(400).json({ success: true, message: "Data connected" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

const a = connectDatabase();
console.log(a);
const PORT = 8000;
//second bottom
app.listen(PORT, async () => {
  //bottom most line
  console.log(`Server is running at port ${PORT}`);
});