const express = require("express");
const app = express();

const { connectDatabase } = require("./connection/connect");
const WEATHER_MODEL = require("./models/weather");
const PROJECT_MODEL = require("./models/Project");
app.use(express.json());
app.post("/api/weather", async (req, res) => {
  try {
    const weatherobj = {
      Country: req.body.country,
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
app.post("/api/projectdata", async (req, res) => {
  try {
    const projectobj = {
      Project_Name: req.body.projectname,
      Start_Date: req.body.startdate,
      End_Date: req.body.enddate,
      No_of_members: req.body.members,
    };
    console.log(projectobj);

    const projectData = new PROJECT_MODEL(projectobj);
    await projectData.save();

    return res.json({ success: true, message: "Data connected" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
app.get("/api/getproject", async (req, res) => {
  try {
    const projectdata = await PROJECT_MODEL.find();
    return res.json({ success: true, data: projectdata });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: true, data: projectdata });
  }
});

app.get("/api/latestproject", async (req, res) => {
  try {
    const sortedproject = await PROJECT_MODEL.find().sort({ End_Date: 1 });
    //We write .sort() to sort documents and inside .sort(object mentioning key field)
    //-1 means descending order and 1 is ascending order
    return res.json({ success: true, data: sortedproject });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.get("/api/limitedproject", async (req, res) => {
  try {
    const sortedproject = await PROJECT_MODEL.find().limit(1);
    // for getting limited documents we use .limit(Number). It will give only given Number of documents
    return res.json({ success: true, data: sortedproject });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.get("/api/latesttwo", async (req, res) => {
  try {
    const sortedproject = await PROJECT_MODEL.find()
      .sort({ End_Date: 1 })
      .limit(2);
    //always sort comes first then limit
    return res.json({ success: true, data: sortedproject });
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
