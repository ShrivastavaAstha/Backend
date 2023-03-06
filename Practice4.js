const express = require("express");
const app = express();

app.get("/api/colors/:code", (req, res) => {
  try {
    let colorcode = parseInt(req.params.code);
    let colors = [
      { name: "Blue", code: 1 },
      { name: "Pink", code: 2 },
      { name: "Lavender", code: 3 },
      { name: "Peach", code: 4 },
      { name: "Black", code: 5 },
      { name: "White", code: 6 },
    ];
    const identity = colors.find((v) => {
      return v.code === colorcode;
    });
    if (identity) {
      return res.json({ success: true, data: identity });
    } else {
      return res.status(400).json({
        success: false,
        error: "color with this code is not available",
      });
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
