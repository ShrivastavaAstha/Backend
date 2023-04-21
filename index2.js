const express = require("express");
const app = express();

const { connectDatabase } = "./connection/connect";
const WEATHER_MODEL = require("./models/weather");
app.use(express.json());
app.post("/api/weather", async (req, res) => {
  try {
    const weatherobj = {
      Contry: req.body.country,
      City: req.body.city,
      Date: req.body.date,
      Temperature: req.body.temp,
      Weather: req.body.weather,
      Precipitation: req.body.preci,
      Pressure: req.body.press,
      Humidity: req.body.humid,
    };
    console.log(weatherobj);
    const weatherData = new WEATHER_MODEL(weatherobj);
    await weatherData.save();
    return res.status(400).json({ success: true, message: "Data connected" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.get("/api/getweather", async (req, res) => {
  try {
    const weathdata = await WEATHER_MODEL.find();
    return res.json({ success: true, data: weathdata });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
const a = connectDatabase();
console.log(a);
const PORT = 8000;

app.listen(PORT, async () => {
  console.log(`Server is running at port ${PORT}`);
});
