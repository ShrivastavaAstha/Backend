const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/data", (req, res) => {
  try {
    console.log(req.body.name);
    console.log(req.body.email);

    const definedobj = {
      username: req.body.name,
      useremail: req.body.email,
    };
    console.log(definedobj);

    return res.json({ success: true, message: "Post api" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

app.post("/api/signin", (req, res) => {
  try {
    let originalPassword = "happysoul";
    let enteredPassword = req.body.password;
    if (originalPassword === enteredPassword) {
      return res.status(200).json({
        success: true,
        message: `Your email is ${req.body.email} and the password is ${req.body.password}`,
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Please check your email" });
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
