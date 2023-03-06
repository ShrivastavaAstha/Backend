const express = require("express");
const app = express();

app.get("/food", (req, res) => {
  return res.json({ message: "Don't waste food" });
});

app.get("/api/school", (req, res) => {
  try {
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
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
