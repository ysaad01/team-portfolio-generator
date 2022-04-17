/* import Engineer.js */
const Engineer = require('../lib/Engineer')

/* create engineer object */
test("create Engineer object", () => {
  const engineer = new Engineer("yas", 1234, "yas@gmail.com", "yas01github")

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
});