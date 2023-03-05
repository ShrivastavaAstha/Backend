const express = require("express");
const app = express();

app.use(express.json());

// create an API from which a user can submit his bio data which includes following fields:
app.post("/api/biodata", (req, res) => {
  try {
    console.log(req.body.name);
    console.log(req.body.birthdate);
    console.log(req.body.address);
    console.log(req.body.phonenumber);
    console.log(req.body.hobbies);
    console.log(req.body.linkedinid);
    console.log(req.body.githubid);
    console.log(req.body.email);

    const newobject = {
      username: req.body.name,
      userbirthdate: req.body.birthdate,
      useraddress: req.body.address,
      usercontactnumber: req.body.phonenumber,
      userhobbies: req.body.hobbies,
      userlinedinid: req.body.linkedinid,
      usergithubid: req.body.githubid,
      useremail: req.body.email,
    };
    console.log(newobject);
    return res.json({ success: true, message: "Submit user's biodata api" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
