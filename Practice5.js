const express = require("express");
const app = express();

app.get("/api/novels", (req, res) => {
  try {
    let novels = [
      { name: "Atomic Habits", author: "James Clear" },
      { name: "The Book Thief", author: "Markus Zusak" },
      { name: "The Alchemist", author: "Paulo Coelho" },
    ];
    return res.json({ data: novels[novels.length - 1].name, success: true });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

// with a variable parameter:-

app.get("/api/novel/:id", (req, res) => {
  try {
    let novelid = parseInt(req.params.id);
    let novel = [
      { id: 1, name: "Make Your Bed", author: "William H.McRaven" },
      { id: 2, name: "As a Man Thinketh", author: "James Allen" },
      { id: 3, name: "The Last Lecture", author: "Jeffrey Zaslow" },
    ];

    const detail = novel.find((v) => {
      return v.id === novelid;
    });
    if (detail) {
      return res.json({ success: true, data: detail });
    } else {
      return res.json({
        success: false,
        error: "novel with this id is not available",
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
