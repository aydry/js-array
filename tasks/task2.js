// 1. getTopScoringStudents
function getTopScoringStudents(students) {
  const topStudents = [];
  
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
      topStudents.push(students[i].name);
    }
  }
  
  return topStudents;
}

// 2. getAverageAge
function getAverageAge(students) {
  let totalAge = 0;
  
  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }
  
  return totalAge / students.length;
}

// 3. addStudent
function addStudent(students, student) {
  students.push(student);
  return students;
}

// 4. removeStudentByName
function removeStudentByName(students, name) {
  const filteredStudents = [];
  
  for (let i = 0; i < students.length; i++) {
    if (students[i].name !== name) {
      filteredStudents.push(students[i]);
    }
  }
  
  return filteredStudents;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };