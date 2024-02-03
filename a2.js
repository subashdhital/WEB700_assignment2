/***********************************************************************
 * WEB700 – Assignment 02
 * 
 *  I declare that this assignment is my own work in accordance with Seneca's
 *  Academic Integrity Policy:
 * 
 *  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
 * 
 *  Name: Subash Dhital Student ID: sdhital1 (123345233) Date: January 30, 2021 
 * github link: https://github.com/subashdhital/WEB700_assignment2
 ***********************************************************************/
// This is the main file for the assignment 2. It will test the collegeData module by calling its methods to get all students, courses and TAs.
const collegeData = require('./modules/collegeData'); //importing the collegeData module

// Initializing the collegeData module
collegeData.initialize()
  .then((message) => {
    //console.log(message);

    // test to get all students
    collegeData.getAllStudents()
      .then((students) => {
        console.log('Successfully retrieved ' + students.length + ' students');
      }).catch((error) => {
        console.error('Error retrieving students:', error);
      });

    // test to get courses
    collegeData.getCourses()
      .then((courses) => {
        console.log('Successfully retrieved ' + courses.length+ ' courses');
      }).catch((error) => {
        console.error('Error retrieving courses:', error);
      });

    // test to get tas
    collegeData.getTAs()
      .then((tas) => {
        console.log('Successfully retrieved ' + tas.length + ' TAs');
      }).catch((error) => {
        console.error('Error retrieving TAs:', error);
      });
  })
.catch((error) => {
    console.error('initialization error:', error);
  });