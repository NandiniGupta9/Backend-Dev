const mongoose = require("mongoose");
const Student = require("../models/studentSchema");

mongoose.connect("mongodb://127.0.0.1:27017/studentDB");

//  GPA between 3.0 and 3.5
Student.find({
  gpa: { $gte: 3.0, $lte: 3.5 }
}).then(console.log);

//  Students with more than 5 courses
Student.find({
  courses: { $size: 6 }
}).then(console.log);

// Top 10 students
Student.find()
  .sort({ gpa: -1 })
  .limit(10)
  .then(console.log);


Student.aggregate([
  {
    $group: {
      _id: "$city",
      count: { $sum: 1 }
    }
  }
]).then(console.log);