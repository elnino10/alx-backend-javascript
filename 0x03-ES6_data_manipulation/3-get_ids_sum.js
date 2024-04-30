export default function getStudentIdsSum(studentsArray) {
  if (!Array.isArray(studentsArray)) return 0;
  return studentsArray.reduce((acc, student) => acc + student.id, 0);
}
