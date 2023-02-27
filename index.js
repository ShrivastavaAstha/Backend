const express = require("express"); //we import express library in our main file for creating server
const app = express(); //we call express function and store its feature in app variable

//app.get (address or request url, callbackfunction)
app.get("/webies", (req, res) => {
  return res.json({ message: "Data fetched from database successfully" });
});

app.get("/guestfaculty", (req, res) => {
  return res.json({ message: "Guestfaculty data is fetched" });
});

app.get("/students", (req, res) => {
  return res.json({ message: "Students data is fetched" });
});

app.get("/professors", (req, res) => {
  return res.json({ message: "Professors data is fetched" });
});

app.get("/assistant", (req, res) => {
  return res.json({ message: "Assistant data is fetched" });
});

app.get("/labworkers", (req, res) => {
  return res.json({ message: "Labworkers data is fetched" });
});

app.get("/colleges", (req, res) => {
  let arr = ["IITB", "IITM", "IITD", "IITISM"];
  if (arr.length >= 5) {
    return res.json({ data: arr, success: true });
  } else {
    return res
      .status(600)
      .json({ error: "Data is less than 5", success: false });
  }
});

app.get("/school", (req, res) => {
  let arrobj = [
    {
      name: "BVP",
      affiliation: "CBSE",
      address: { state: "Bihar", district: "saran" },
    },
    {
      name: "CPS",
      affiliation: "CBSE",
      address: { state: "Bihar", district: "saran" },
    },
  ];
  if (arrobj.length >= 3) {
    return res.json({ data: arrobj, success: true });
  } else {
    return res.json({ error: "Data is less than 3", success: false });
  }
});

app.get("/college", (req, res) => {
  try {
    let cllg = ["IITB", "IITM", "IITD", "IITISM"];
    return res.json({ data: cllg.length, code: 12 });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.get("/trycatch", (req, res) => {
  try {
    let nicknames = [
      { name: "Astha", id: 1 },
      { name: "Khushi", id: 2 },
      { name: "Grashi", id: 3 },
      { name: "Jolly", id: 4 },
    ];
    //return res.json({ data: nicknames[2].name, codes: 12 });
    return res.json({ data: nicknames[nicknames.length - 1].name, codes: 12 });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.get("/api/user/:id", (req, res) => {
  try {
    let userid = parseInt(req.params.id);
    let names = [
      { name: "Astha", id: 1 },
      { name: "Khushi", id: 2 },
      { name: "Grashi", id: 3 },
      { name: "Jolly", id: 4 },
    ];

    const user = names.find((v) => {
      return v.id === userid;
    });
    if (user) {
      return res.json({ success: true, data: user });
    } else {
      return res.json({
        success: false,
        error: "user with this id is not available",
      });
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

//app.listen(portnumber,callback function) => callback function is called when previous task is completed.
app.listen(8000, () => {
  console.log("Server is running at Port 8000");
});
