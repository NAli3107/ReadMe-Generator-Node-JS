const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
let generateTemplate = require("./ReadMe-template.js");

const questions = () => {
  return inquirer.prompt([
    {
      // Prompts to take user input for specific readMe file information.
      type: "input",
      name: "github",
      message: "Please enter your Github Username.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address.",
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description for your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "Please enter your project's installation instructions.",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter usage information.",
    },
    {
      type: "input",
      name: "contribution",
      message: "Please enter your project contribution guidelines.",
    },
    {
      type: "input",
      name: "tests",
      message: "Please enter test instructions.",
    },
    {
      // Takes user input via checkbox using space-bar to add choice and up and down keys to move down list
      type: "list",
      message: "Licensing Options",
      name: "license",
      choices: [
        "Apache2.0",
        "GNU Public v3.0",
        "MIT",
        "Boost Software 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public 2.0",
        "GNU Affero General Public v3.0",
        "GNU General Public v2.0",
        "GNU Lesser General Public v2.1",
        "Mozilla Public 2.0",
        "No license",
      ],
    },
  ]);
};

const writeFile = (fileName, data) => {
  try {
    fs.writeFileSync(path.join(process.cwd(),fileName), data);
  } catch (error) {
    console.log(error.message);
  }
};

const generateReadMe = () => {
  questions()
    .then((answers) => {
      return writeFile("./build/README.md", generateTemplate({...answers}));
    })
    .catch((err) => {
      console.log(err);
    });
};

generateReadMe();
