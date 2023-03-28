const express = require("express");
//const mongoose = require("mongoose"); //works as a middle ware b/w database and server
const app = express(); //it must be the topmost line of server

const { connectDatabase } = require("./connection/connect");
const USER_MODEL = require("./models/User");
const ACCOUNT_MODEL = require("./models/account");
const BLOG_MODEL = require("./models/blog");
const BOOK_MODEL = require("./models/book");
const ELECTRICITY_MODEL = require("./models/Electricity");
const TICKET_MODEL = require("./models/Ticket");
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

app.post("/api/blogdata", async (req, res) => {
  try {
    const blogobj = {
      blogTitle: req.body.userBlogtitle,
      Date: req.body.userDate,
      body: req.body.userBody,
    };
    console.log(blogobj);

    const blogData = new BLOG_MODEL(blogobj);
    await blogData.save();
    return res.status(400).json({ success: true, message: "Data connected" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.post("/api/bookdata", async (req, res) => {
  try {
    const bookobj = {
      bookName: req.body.userBookName,
      author: req.body.Author,
      PublishingData: req.body.userPublishingdate,
      Theme: req.body.userTheme,
      ISBN: req.body.userISBN,
    };
    console.log(bookobj);

    const bookData = new BOOK_MODEL(bookobj);
    await bookData.save();
    return res.status(400).json({ success: true, message: "Data connected" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
app.post("/api/electricitydata", async (req, res) => {
  try {
    const elecobj = {
      state: req.body.userState,
      ElectricityBoard: req.body.userBoard,
      CAnumber: req.body.userCAno,
      AccountNo: req.body.userAccno,
      AccountName: req.body.userName,
      PaymentStatus: req.body.userPayStatus,
    };
    console.log(elecobj);

    const elecData = new ELECTRICITY_MODEL(elecobj);
    await elecData.save();
    return res.status(400).json({ success: true, message: "Data connected" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
app.post("/api/ticketdata", async (req, res) => {
  try {
    const ticketobj = {
      PNR: req.body.trainPNR,
      Trn: req.body.userTrn,
      Date: req.body.userDate,
      Time: req.body.userTime,
      cls: req.body.userCls,
      boardingStation: req.body.userBoardingStation,
    };
    console.log(ticketobj);

    const ticketData = new TICKET_MODEL(ticketobj);
    await ticketData.save();
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
