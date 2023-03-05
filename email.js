const express = require("express");
const app = express();
app.use(express.json());

//Create a login api like instagram, in which user enters his/her email and password .After receiving the email and password ,
//check whether the email is valid and then check if the password is correct.
app.post("/api/details", (req, res) => {
  try {
    console.log(req.body.email);

    const definedobject = {
      useremail: req.body.email,
    };
    console.log(definedobject);
    return res.json({ success: true, message: "submitting details" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
app.post("/api/instagramlogin", (req, res) => {
  try {
    let originalpassword = "webies123@#";
    let enteredPassword = req.body.password;
    console.log(req.body);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)) {
      if (originalpassword === enteredPassword) {
        return res.json({ success: true, message: "Logged in!" });
      } else {
        return res.json({ success: false, message: "Check your password" });
      }
    } else {
      return res.status(400).json({ success: false, message: "invalid email" });
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
