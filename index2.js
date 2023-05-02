const express = require("express");
const app = express();

const { connectDatabase } = require("./connection/connect");
const WEATHER_MODEL = require("./models/weather");
const PROJECT_MODEL = require("./models/Project");
const STUDENT_MODEL = require("./models/student");
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

//------------------------------------------STUDENT DATA--------------------------------------->

app.post("/api/studentdata", async (req, res) => {
  try {
    const stuobj = {
      name: req.body.name,
      rollno: req.body.rollno,
      class: req.body.class,
      age: req.body.age,
      school: req.body.school,
      contactno: req.body.contact_no,
    };
    console.log(stuobj);

    await new STUDENT_MODEL(stuobj).save();
    return res
      .status(400)
      .json({ success: true, message: "Database Connected" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
app.get("/api/getstudent", async (req, res) => {
  try {
    const studentdata = await STUDENT_MODEL.find();
    return res.json({ success: true, data: studentdata });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
app.get("/api/lateststudent", async (req, res) => {
  try {
    const sortedstudent = await STUDENT_MODEL.find().sort({ class: -1 });
    return res.json({ success: true, data: sortedstudent });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
app.get("/api/limitedstudent", async (req, res) => {
  try {
    const sortedstudent = await STUDENT_MODEL.find().limit(2);
    return res.json({ success: true, data: sortedstudent });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
app.get("/api/limitedtwostu", async (req, res) => {
  try {
    const sortedstudent = await STUDENT_MODEL.find()
      .sort({ class: -1 })
      .limit(2);
    return res.json({ success: true, data: sortedstudent });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
app.get("/api/filterstu", async (req, res) => {
  try {
    const sortedstudent = await STUDENT_MODEL.find(
      { school: "bvp" },
      { name: 1, class: 1 }
    )
      .sort({
        class: -1,
      })
      .limit(1);
    return res.json({ success: true, data: sortedstudent });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
//finds first bracket gives the filter that only those data will be shown that passes the given filter criteria.
//and second bracket gives the projection that only the given projection data should present .
app.get("/api/findone", async (req, res) => {
  try {
    const sortedstudent = await STUDENT_MODEL.findOne(
      { school: "bvp" },
      { name: 1, class: 1 }
    ).sort({
      class: -1,
    });
    return res.json({ success: true, data: sortedstudent });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
//to find only one document.
app.get("/api/findbyid", async (req, res) => {
  try {
    const sortedstudent = await STUDENT_MODEL.findById(
      "64507233308a1609368c979f",
      {
        name: 1,
        class: 1,
      }
    ).sort({
      class: -1,
    });
    return res.json({ success: true, data: sortedstudent });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
//it finds the data that has the given id.
app.get("/api/findbyid/:id", async (req, res) => {
  try {
    const sortedstudent = await STUDENT_MODEL.findById(req.params.id, {
      name: 1,
      class: 1,
    }).sort({
      class: -1,
    });
    return res.json({ success: true, data: sortedstudent });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
// it gets id from the frontend.

//Pagination:
//It works on skip and limit function:
app.get("/pagination", async (req, res) => {
  try {
    const paginatedstu = await STUDENT_MODEL.find()
      .skip((pageno - 1) * 40)
      .limit(10);
    return res.status(200).json({ success: true, data: paginatedstu });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
//----------------------------------UPDATE OPERATION-----------------------------------------------
//In read operation, first bracket is filter and second is projection, but in update operation,
//first bracket is filter, but the second is the updated object you want .
// Put http is the defined http for update operation but we generally use post operation for it.

//UPDATE operation by using id
app.put("/update/:id", async (req, res) => {
  try {
    const data = await STUDENT_MODEL.findByIdAndUpdate(req.params.id, {
      class: 11,
      name: "Astha Srivastava",
    });
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

//--------------------------DELETE OPERATION---------------------------------
//delete by id
app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedoc = await STUDENT_MODEL.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});
//------------------------------------------------------------------------------------------------------
const a = connectDatabase();
console.log(a);
const PORT = 8000;

app.listen(PORT, async () => {
  console.log(`Server is running at port ${PORT}`);
});
