const test = require('node:test');
const assert = require('node:assert');
const { getWelcomeMessage, calculateGrade } = require('../src/app.js');

test('returns default welcome message when no name is provided', () => {
  const result = getWelcomeMessage();
  assert.strictEqual(result, "Welcome to BS IT Semester 7 CI/CD Portal!");
});

test('returns personalized message when name is provided', () => {
  const result = getWelcomeMessage("Talha");
  assert.strictEqual(result, "Welcome, Talha!");
});

test('calculates correct letter grade for score', () => {
  assert.strictEqual(calculateGrade(85), "A");
  assert.strictEqual(calculateGrade(72), "B");
  assert.strictEqual(calculateGrade(50), "F");
});
