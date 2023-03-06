const express = require("express");
const app = express();

app.get("/api/subjects/:code", (req, res) => {
  try {
    let subjectcode = parseInt(req.params.code);
    let subjects = [
      { sub: "Numerical Techniques", code: 254 },
      { sub: "Analog Integrated Circuits", code: 251 },
      { sub: "Principles Of Communication ", code: 252 },
      { sub: "Microprocessors and Applications", code: 253 },
      { sub: "Electromagnetic Field Theory", code: 254 },
      { sub: "Electronic Software Tools", code: 255 },
    ];
    const names = subjects.find((v) => {
      return v.code === subjectcode;
    });
    if (names) {
      return res.json({ success: true, data: names });
    } else {
      return res.json({
        success: false,
        error: "subject with this code is not available",
      });
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} `);
});
