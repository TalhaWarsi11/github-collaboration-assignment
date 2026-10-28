function getWelcomeMessage(studentName) {
  if (!studentName) {
    return "Welcome to BS IT Semester 7 CI/CD Portal!";
  }
  return `Welcome, ${studentName}!`;
}

function calculateGrade(score) {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  return "F";
}

module.exports = { getWelcomeMessage, calculateGrade };
