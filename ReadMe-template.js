const renderLicenseBadge = function (license) {
  if (license !== "No License") {
    return `<img src="https://img.shields.io/badge/LICENSE-${license}-brightgreen.svg">`;
  } else {
    return "";
  }
};

const renderLicenseLink = function (license) {
  if (license !== "No License") {
    return `* [License](#license)`;
  } else {
    return "";
  }
};

const renderLicenseSection = function (license) {
  if (license !== "No License") {
    return ` ## License 
    This project is license under ${license}`;
  } else {
    return "";
  }
};

const renderReadmeTemplate = function (questions) {
  return `# ${questions.title}
  
  ${renderLicenseBadge(questions.license)}

  ## Description 
    ${questions.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    ${renderLicenseLink(questions.license)}
    * [Questions](#questions)

    ## Installation 
    Run the following script to install the packages required for the application:${questions.installation}

    ## Usage 
    To use the application run the following script:${questions.usage}

    ## Contributing 
    ${questions.contribution}
    
    ## Tests
    To use the application run the following script:${questions.tests}

    ${renderLicenseSection(questions.license)}

    ## Questions
    If you have any questions about this projects, please contact me directly at ${
      questions.email
    }. You can view more of my projects at https://github.com/${
    questions.github
  }
`;
};

module.exports = renderReadmeTemplate;
