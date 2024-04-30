export default function updateStudentGradeByCity(studentsArray, city, newGrade) {
  if (!Array.isArray(studentsArray)) return [];
  return studentsArray
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrade.find((grade) => grade.studentId === student.id);
      if (gradeObj === undefined) {
        return { ...student, grade: 'N/A' };
      }
      return {
        ...student,
        grade: gradeObj.grade || 'N/A',
      };
    });
}
