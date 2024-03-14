const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/student")
  .then(() => {
    console.log("Server connect successfully");
  })
  .catch((e) => {
    console.log("error in connection", e);
  });

const academicSchema = new mongoose.Schema({
  studentId: Number,
  name: String,
  grade: String,
  subject: String,
});
const AcademicModel = mongoose.model("Academic", academicSchema);

const createAcademic = async () => {
  try {
    const allAcademic = await AcademicModel.create([
      { studentId: 1001, name: "Mini", departmment: "CSE", subject: "Theory of Computation" },
      { studentId: 1002, name: "Sahana", departmment: "CSE-DS", subject: "Operating System" },
      { studentId: 1003, name: "Brunda", departmment: "CSE-AIML", subject: "AI Applications" },
      { studentId: 1004, name: "Moksha", departmment: "EECE", subject: "Embedded Systems" },
    ]);
  } catch (error) {
    console.log("error while creating Academic Model", error);
  }
};
createAcademic();

const getacademic = async () => {
  const academicresult = await AcademicModel.find();
  console.log(academicresult);
};
getacademic();

const curricularSchema = new mongoose.Schema({
  studentId: Number,
  name: String,
  activityType: String,
  Duration: String,
  achievements: String,
});

const CurricularModel = new mongoose.model("Curricular", curricularSchema);

const createCurricular = async () => {
  try {
    const allCurricular = await CurricularModel.create([
      {
        studentId: 1001,
        name: "Mini",
        activityType: "Tennis",
        Duration: "3rd Year",
        achievements: "2nd",
      },
      {
        studentId: 1002,
        name: "Sahana",
        activityType: "Relay",
        Duration: "3rd Year",
        achievements: "1st",
      },
      {
        studentId: 1003,
        name: "Brunda",
        activityType: "Soccer",
        Duration: "2nd Year",
        achievements: "3rd",
      },
      {
        studentId: 1004,
        name: "Moksha",
        activityType: "Volleyball",
        Duration: "1st Year",
        achievements: "2nd",
      },
    ]);
  } catch (error) {
    console.log("error while createing curricular Model", error);
  }
};
createCurricular();

const getCurricular = async () => {
  const curricularResult = await CurricularModel.find();
  console.log(curricularResult);
};
getCurricular();