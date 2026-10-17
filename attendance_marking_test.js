const assert = require('assert');

function markAttendance(studentId, classId, attendanceStore) {
  if (!studentId || !classId) {
    throw new Error('studentId and classId are required');
  }
  const key = `${studentId}:${classId}`;
  if (attendanceStore.has(key)) {
    return { marked: false, reason: 'already-marked' };
  }
  attendanceStore.add(key);
  return { marked: true };
}

const attendance = new Set();
assert.deepStrictEqual(markAttendance('student-101', 'math-01', attendance), { marked: true });
assert.deepStrictEqual(markAttendance('student-101', 'math-01', attendance), {
  marked: false,
  reason: 'already-marked',
});
assert.throws(() => markAttendance('', 'math-01', attendance), /required/);

console.log('PASS: attendance marking and duplicate protection scenarios');
