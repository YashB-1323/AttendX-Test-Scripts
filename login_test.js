const assert = require('assert');

function login(username, password) {
  if (username === 'qa.user' && password === 'AttendX@123') {
    return { authenticated: true, role: 'student' };
  }
  return { authenticated: false };
}

const result = login('qa.user', 'AttendX@123');
assert.strictEqual(result.authenticated, true);
assert.strictEqual(result.role, 'student');
assert.strictEqual(login('qa.user', 'wrong-password').authenticated, false);
assert.strictEqual(login('unknown.user', 'AttendX@123').authenticated, false);

console.log('PASS: valid credentials, invalid password, and unknown user scenarios');
