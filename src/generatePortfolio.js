/* import files */
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

function generateTeam(team) {
  let cards = [];
  for (let i = 0; i < team.length; i++) {
    const teamArray = team[i];
    switch (teamArray.getRole()) {
      case "Manager":
        const manager = new Manager(
          teamArray.id,
          teamArray.name,
          teamArray.email,
          teamArray.office
        );
        cards.push(managerCard(manager));
        break;
      case "Engineer":
        const engineer = new Engineer(
          teamArray.id,
          teamArray.name,
          teamArray.email,
          teamArray.github
        );
        cards.push(engineerCard(engineer));
        break;
      case "Intern":
        const intern = new Intern(
          teamArray.id,
          teamArray.name,
          teamArray.email,
          teamArray.school
        );
        cards.push(internCard(intern));
    }
  }
  return cards.join(``);
} 

let managerCard = (manager) => {
  return `
    <div class="card h-100 m-2 border-success" style="width:40%;">
      <div class="card-header">
        <h3>${manager.getName()}</h3>
        <h6 class="mb-2 text-muted">${manager.getRole()}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
      </ul>
    </div>
  `;
}

let engineerCard = (engineer) => {
  return `
    <div class="card h-100 m-2 border-success" style="width:40%;">
      <div class="card-header">
        <h3>${engineer.getName()}</h3>
        <h6 class="mb-2 text-muted">${engineer.getRole()}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
      </ul>
    </div>
  `;
}
let internCard = (intern) => {
  return `
    <div class="card h-100 m-2 border-success" style="width:40%;">
      <div class="card-header">
        <h3>${intern.getName()}</h3>
        <h6 class="mb-2 text-muted">${intern.getRole()}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
  `;
}

function generatePortfolio(team) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <title>My Team Ü</title>
    </head>

    <body>
      <header>
        <nav class="navbar bg-warning justify-content-center">
          <h1> My Team Ü </h1>
        </nav>
      </header>

      <div class="d-flex flex-row flex-wrap justify-content-center">
        ${generateTeam(team)}
      </div>

    </body>
    </html>
  `;
}

module.exports = generatePortfolio; 