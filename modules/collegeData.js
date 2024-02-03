//STEP 3: writing the collegeData module

const courses = require("../data/courses.json"); //importing the courses.json file
const students = require("../data/students.json");//importing the students.json file

//class creation with constructor
class Data{
    constructor(students, courses){
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null;


function initialize(){
    dataCollection = new Data(students, courses);
    return Promise.resolve();
}

//accessing the data using the datacollection objects
function getAllStudents(){
    return new Promise((resolve, reject)=>{ //using the resolve and reject method of promise
        if (dataCollection.students === 0){
            reject("no results returned");
        }
        else{
            resolve(dataCollection.students);
        }
    });
}

function getTAs() {
    return new Promise((resolve, reject) => {
      const tas = dataCollection.students.filter(student => student.TA);
      if (tas.length === 0) {
        reject("no results returned.");
      } 
      else {
        resolve(tas);
      }
    });
  }

  function getCourses() {
    return new Promise((resolve, reject) => {
      if (dataCollection.courses === 0) {
        reject("no results returned.");
      } 
      else {
        resolve(dataCollection.courses);
      }
    });
  }

  //exporting the module
  module.exports = {
    initialize,
    getAllStudents,
    getTAs,
    getCourses
  };