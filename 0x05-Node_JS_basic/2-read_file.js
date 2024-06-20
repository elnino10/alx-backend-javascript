const fs = require("fs");

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf8").split("\n");
    const fields = {};
    const numberOfStudents = data.length - 1;
    console.log(`Number of students: ${numberOfStudents}`);
    let student;
    for (let i = 1; i <= numberOfStudents; i++) {
      student = data[i].split(",");
      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    }
    for (let key in fields) {
      console.log(
        `Number of students in ${key}: ${fields[key].length}. List: ${fields[
          key
        ].join(", ")}`
      );
    }
  } catch (error) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
