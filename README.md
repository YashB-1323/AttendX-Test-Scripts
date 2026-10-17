# AttendX Test Scripts

This repository contains shared JavaScript smoke-test examples for the AttendX
student attendance application. The scripts use Node.js built-in assertions, so
they can be run without installing additional packages.

## Scripts

- `login_test.js` checks successful authentication, the returned student role,
  and rejection of an invalid password.
- `attendance_marking_test.js` checks that attendance can be marked once,
  duplicate marking is rejected, and required identifiers are validated.

## Run the tests

From the repository root:

```powershell
node login_test.js
node attendance_marking_test.js
```

Both commands print `PASS` when their assertions succeed.

## Git workflow observations

The team uses Git to keep one shared history for the scripts instead of
exchanging copies by email or pen drive. The workflow used for this exercise
is recorded in the final commit history and includes local commits, GitHub
pushes, and pulling an edit made directly on GitHub.
