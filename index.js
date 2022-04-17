/* imports */
const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generatePortfolio = require('./src/generatePortfolio');

team = [];

const managerQs = () => {
  inquirer
    .prompt([
      {
        message: "What is the Manager's name?",
        type: "input",
        name: "name",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            return "Please enter the Manager's name.";
          }
        }
      },

      {
        message: "What is the Manager's ID number?",
        type: "input",
        name: "id",
        validate: idInput => {
          if (isNaN(idInput) || idInput === "") {
            return "Please enter a valid ID.";
          } else {
            return true;
          }
        }
      },

      {
        message: "What is the Manager's email address?",
        type: "input",
        name: "email",
        validate: emailInput => {
          if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailInput)) {
            return true;
          } else {
            return "Please enter a valid email address.";
          }
        }
      },

      {
        message: "What is the Manager's office number?",
        type: "input",
        name: "office",
        validate: officeInput => {
          if (isNaN(officeInput) || officeInput === "") {
            return "Please enter a valid office number.";
          } else {
            return true;
          }
        }
      },

      {
        message: "What type of Team Member would you like to add next:",
        type: "list",
        name: "addTM",
        choices: ["Engineer", "Intern", "No more Team Members to add"],
      }
    ])
    .then((managerAs) => {
      const manager = new Manager(
        managerAs.id,
        managerAs.name,
        managerAs.email,
        managerAs.office
      )
      team.push(manager)
      switch (managerAs.addTM) {
        case "Engineer":
          engineerQs();
          break;
        case "Intern":
          internQs();
          break;
        default:
          writeToFile("dist/index.html", generatePortfolio(team))
      }
    });
}

const engineerQs = () => {
  inquirer
    .prompt([
      {
        message: "What is the Engineer's name?",
        type: "input",
        name: "name",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            return "Please enter the Engineer's name.";
          }
        }
      },

      {
        message: "What is the Engineer's ID number?",
        type: "input",
        name: "id",
        validate: idInput => {
          if (isNaN(idInput) || idInput === "") {
            return "Please enter a valid ID.";
          } else {
            return true;
          }
        }
      },

      {
        message: "What is the Engineer's email address?",
        type: "input",
        name: "email",
        validate: emailInput => {
          if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailInput)) {
            return true;
          } else {
            return "Please enter a valid email address.";
          }
        }
      },

      {
        message: "What is the Engineer's GitHub username?",
        type: "input",
        name: "github",
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            return "Please enter GitHub username"
          }
        }
      },

      {
        message: "What type of Team Member would you like to add next:",
        type: "list",
        name: "addTM",
        choices: ["Engineer", "Intern", "No more Team Members to add"],
      }
    ])
    .then((engineerAs) => {
      const engineer = new Engineer(
        engineerAs.id,
        engineerAs.name,
        engineerAs.email,
        engineerAs.github
      );
      team.push(engineer);
      switch (engineerAs.addTM) {
        case "Engineer":
          engineerQs();
          break;
        case "Intern":
          internQs();
          break;
        default:
          writeToFile("dist/index.html", generatePortfolio(team));
      }
    });
};

const internQs = () => {
  inquirer
    .prompt([
      {
        message: "What is the Intern's name?",
        type: "input",
        name: "name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return "Please enter the Intern's name.";
          }
        },
      },

      {
        message: "What is the Intern's ID number?",
        type: "input",
        name: "id",
        validate: (idInput) => {
          if (isNaN(idInput) || idInput === "") {
            return "Please enter a valid ID.";
          } else {
            return true;
          }
        },
      },

      {
        message: "What is the Intern's email address?",
        type: "input",
        name: "email",
        validate: (emailInput) => {
          if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailInput)) {
            return true;
          } else {
            return "Please enter a valid email address.";
          }
        },
      },

      {
        message: "What is the Intern's school name?",
        type: "input",
        name: "school",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            return "Please enter the school's name. ";
          }
        },
      },

      {
        message: "What type of Team Member would you like to add next:",
        type: "list",
        name: "addTM",
        choices: ["Engineer", "Intern", "No more Team Members to add"],
      },
    ])
    .then((internAs) => {
      const intern = new Intern(
        internAs.id,
        internAs.name,
        internAs.email,
        internAs.school
      );
      team.push(intern);
      switch (internAs.addTM) {
        case "Engineer":
          engineerQs();
          break;
        case "Intern":
          internQs();
          break;
        default:
          writeToFile("dist/index.html", generatePortfolio(team));
      }
    });
};

managerQs()

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log(`Portfolio saved to ${filename}!`)
  });
};