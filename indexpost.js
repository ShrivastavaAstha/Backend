const express = require("express");
const app = express();

app.use(express.json()); //By writing this ,we are preparing our server to receive data from frontend, else we receive undefined.

// whenever frontend sends some data to backend server for storing in database we use POST requests.
// e.g. Login/signup forms, Message sending Posting photos on Social media and etc.
//In Postman, Data to be sent to backend is written inside body (raw,json)
//and can be received in the backend in an object "req.body"

app.post("/api/user", (req, res) => {
  try {
    console.log(req.body);

    return res.json({ success: true, message: "Testing submit api" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
