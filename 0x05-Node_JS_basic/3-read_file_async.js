const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const fields = {};
    fs.readFile(path, 'utf8', (err, data) => {
      if (err || data === undefined) {
        reject(Error('Cannot load the database'));
        return;
      }

      if (data.length <= 1) {
        reject(Error('Cannot load the database'));
        return;
      }
      const dataStr = data.toString().split('\n');
      const numberOfStudents = dataStr.slice(1).length;
      console.log(`Number of students: ${numberOfStudents}`);

      dataStr.slice(1).forEach((student) => {
        const studentArr = student.split(',');
        if (!fields[studentArr[3]]) fields[studentArr[3]] = [];
        fields[studentArr[3]].push(studentArr[0]);
      });
      for (const key in fields) {
        if (fields[key]) {
          console.log(
            `Number of sudents in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`,
          );
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;
