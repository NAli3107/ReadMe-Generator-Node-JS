const renderReadmeMarkdown = function () {
  return `#${data.title}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)

    ## Description 
    ${data.description}

    ## Installation 
    Run the following script to install the packages required for the application:${data.install}

    ## Usage 
    To use the application run the following script:${data.usage}

    ## Contributing 
    ${data.contributors}
    
    ## Tests
    To use the application run the following script:${data.test}

    ## License 
    This project is license under ${data.license}

    ## Questions
    If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
};

module.exports = renderReadmeMarkdown;
