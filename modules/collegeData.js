// Step 3: Writing the "collegeData" Module

const courses = require("../data/courses.json");    // Importing courses.json file

const students = require("../data/students.json");  // Importing students.json file

// Class creation with constructor
class Data {
  constructor(students, courses) {
    this.students = students;
    this.courses = courses;
  }
}

let dataCollection = null;

// Function to initialize data by creating a Data instance
function initialize() {
  // Create a Data class instance with students and courses data
  dataCollection = new Data(students, courses);
  // Resolve the promise to indicate successful initialization
  return Promise.resolve();
}

// Function to get all students
function getAllStudents() {
  return new Promise((resolve, reject) => {
    // Check if students data exists
    if (dataCollection.students.length === 0) {
      reject("No results returned");
    } else {
      resolve(dataCollection.students);
    }
  });
}

// Function to get Teaching Assistants (TAs)
function getTAs() {
  return new Promise((resolve, reject) => {
    // Filter students who are TAs
    const tas = dataCollection.students.filter(student => student.TA);
    // Check if any TAs found
    if (tas.length === 0) {
      // If no TAs, reject with a meaningful message
      reject("No results returned.");
    } else {
      // If TAs exist, resolve with the TAs data
      resolve(tas);
    }
  });
}

// Function to get all courses
function getCourses() {
  return new Promise((resolve, reject) => {
    // Check if courses data exists
    if (dataCollection.courses.length === 0) {
      // If no courses, reject with a meaningful message
      reject("No results returned.");
    } else {
      // If courses exist, resolve with the courses data
      resolve(dataCollection.courses);
    }
  });
}

// Exporting the module functions
module.exports = {
  initialize,
  getAllStudents,
  getTAs,
  getCourses
};
