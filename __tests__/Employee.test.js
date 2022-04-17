/* import Employee.js file */
const Employee = require('../lib/Employee');


/* create Employee object */
test("Create an Employee", () => {
  const employee = new Employee('Yas', 1234, 'yas@gmail', 'yasgithub');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});