const express = require("express");
const app = express();
app.use(express.json());

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

app.post("/api/details", (req, res) => {
  try {
    console.log(req.body.email);
    console.log(req.body.password);

    const definedobject = {
      useremail: req.body.email,
      userpassword: req.body.password,
    };
    console.log(definedobject);
    return res.json({ success: true, message: "submitting details" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.post("/api/instagramlogin", (req, res) => {
  try {
    let atsymbol = req.body.email.indexOf("@");
    let dotsymbol = req.body.email.lastIndexOf(".");
    let spacesymbol = req.body.email.indexOf(" ");
    let originalPassword = "webies123@#";
    let enteredPassword = req.body.password;
    if (
      atsymbol != -1 &&
      atsymbol != 0 &&
      dotsymbol != -1 &&
      dotsymbol != 0 &&
      dotsymbol > atsymbol + 1 &&
      req.body.email.length > dotsymbol + 2 &&
      spacesymbol == -1
    ) {
      {
        if (originalPassword === enteredPassword) {
          return res.status(200).json({
            success: true,
            message: `Hello, your email is ${req.body.email} and your password is ${req.body.password}`,
          });
        } else {
          return res
            .status(401)
            .json({ success: false, message: "Invalid Password , Try Again!" });
        }
      }
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Email , Try Again!" });
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
