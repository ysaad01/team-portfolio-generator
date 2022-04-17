/* import Manager.js file */
const Manager = require('../lib/Manager');

test("Create new manager", () => {
  const manager = new Manager("Yazz", 11111, "yazz@gmail.com", 987);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.office).toEqual(expect.any(Number));
});