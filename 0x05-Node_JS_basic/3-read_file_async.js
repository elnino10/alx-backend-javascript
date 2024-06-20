const fs = require("fs");

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const fields = {};
    fs.readFile(path, "utf8", (err, data) => {
      if (err || data === undefined) {
        reject(Error("Cannot load the database"));
        return;
      }

      if (data.length <= 1) reject(Error("Cannot load the database"));
      data = data.toString().split("\n");
      const numberOfStudents = data.slice(1).length;
      console.log(`Number of students: ${numberOfStudents}`);

      data.slice(1).forEach((student) => {
        student = student.split(",");
        if (!fields[student[3]]) fields[student[3]] = [];
        fields[student[3]].push(student[0]);
      });
      for (let key in fields) {
        console.log(
          `Number of sudents in ${key}: ${fields[key].length}. List: ${fields[key]}`
        );
      }
      resolve();
    });
  });
}

module.exports = countStudents;
