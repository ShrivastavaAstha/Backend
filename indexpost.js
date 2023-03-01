const express = require("express");
const app = express();

app.use(express.json()); //By writing this ,we are preparing our server to receive data from frontend,
// else we receive undefined.

// whenever frontend sends some data to backend server for storing in database we use POST requests.
// e.g. Login/signup forms, Message sending Posting photos on Social media and etc.
//In Postman, Data to be sent to backend is written inside body (raw,json)
//and can be received in the backend in an object "req.body"

app.post("/api/user", (req, res) => {
  try {
    console.log(req.body.name);
    console.log(req.body.address.dist);
    console.log(req.body.pincode);
    console.log(req.body.email);
    console.log(req.body.password);

    //Now we are going to create a new object with above values with different keys.
    //We make a new object which have keys as per the database definition and we fill the corresponding
    //values coming from frontend in them.
    const newobject = {
      username: req.body.name,
      userstate: req.body.address.state,
      userdist: req.body.address.dist,
      userpin: req.body.pincode,
      useremail: req.body.email,
      userpassword: req.body.password,
    };
    console.log(newobject);

    //MongoDB stores documents data in the form of an object and the key names of the objects must be same
    //for each document in a collection which is predefined (in models)
    return res.json({ success: true, message: "Testing submit api" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.post("/api/login", (req, res) => {
  try {
    let originalPassword = "needanap";
    let enteredPassword = req.body.password;
    if (originalPassword === enteredPassword) {
      return (
        res
          .status(200)
          //.json({ success: true, message: "Logged in successfully" });
          .json({
            success: true,
            message: `Hello, the email is ${req.body.email} and the password is ${req.body.password}`,
          })
      );
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
