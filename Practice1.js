const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/details", (req, res) => {
  try {
    console.log(req.body.name);
    console.log(req.body.password);

    const definedobject = {
      username: req.body.name,
      userpassword: req.body.password,
    };
    console.log(definedobject);

    return res.json({ success: true, message: "Submitting details api" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.post("/api/login", (req, res) => {
  try {
    let originalPassword = "possitivity";
    let enteredPassword = req.body.password;
    if (originalPassword === enteredPassword) {
      return res.status(200).json({
        success: true,
        message: `Hello, the username is ${req.body.name} and the password is ${req.body.password}`,
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Please check your password" });
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
