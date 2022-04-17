const Intern = require('../lib/Intern')

test("create new Intern", () => {
  const intern = new Intern("yaz", 12345, "yaz@gmail.com", "yazgithub")

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});``