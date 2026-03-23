const mongoose = require("mongoose");
const Student = require("../models/studentSchema");

mongoose.connect("mongodb://127.0.0.1:27017/studentDB");

// 1. Add Student
async function addStudent() {
  await Student.create({
    name: "Amit",
    email: "amit@gmail.com",
    gpa: 3.4,
    courses: ["CS101", "CS102"],
    city: "Delhi",
    department: "CSE"
  });
}

// 2. View All
async function getStudents() {
  const data = await Student.find();
  console.log(data);
}

// 3. Find by Email
async function findStudent() {
  const data = await Student.findOne({ email: "amit@gmail.com" });
  console.log(data);
}

// 4. Update GPA
async function updateGPA() {
  await Student.updateOne(
    { email: "amit@gmail.com" },
    { $set: { gpa: 3.9 } }
  );
}

// 5. Delete Student
async function deleteStudent() {
  await Student.deleteOne({ email: "amit@gmail.com" });
}

// Run any function
// addStudent();
// getStudents();
// findStudent();
// updateGPA();
// deleteStudent();