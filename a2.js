/***********************************************************************
 * WEB700 – Assignment 02
 * 
 *  I declare that this assignment is my own work in accordance with Seneca's
 *  Academic Integrity Policy:
 * 
 *  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
 * 
 *  Name: Subash Dhital Student ID: sdhital1 (123345233) Date: January 30, 2024 
 *  GitHub Link: https://github.com/subashdhital/WEB700_assignment2
 ***********************************************************************/

// Importing the collegeData module
const collegeData = require('./modules/collegeData');

// Initializing the collegeData module
collegeData.initialize()
  .then(() => {
    // to get all students
    collegeData.getAllStudents()
      .then((students) => {
        console.log('Successfully retrieved ' + students.length + ' students');
      })
      .catch((error) => {
        console.error('Error retrieving students:', error);
      });

    // to get courses
    collegeData.getCourses()
      .then((courses) => {
        console.log('Successfully retrieved ' + courses.length + ' courses');
      })
      .catch((error) => {
        console.error('Error retrieving courses:', error);
      });

    // to get TAs
    collegeData.getTAs()
      .then((tas) => {
        console.log('Successfully retrieved ' + tas.length + ' TAs');
      })
      .catch((error) => {
        console.error('Error retrieving TAs:', error);
      });
  })
    // Catch any initialization errors
  .catch((error) => { 
    console.error('Initialization error:', error);
  });
