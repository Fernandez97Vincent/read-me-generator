// TODO: Include packages needed for this application
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateReadMe');
// TODO: Create an array of questions for user input

// create the readme here


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Give me a description of your project'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do we run the repository?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repository?'
    },

    {
        type: 'input',
        name: 'license',
        message: 'What type of license is used for this repository?',
        choices: ['APACHE', 'GPL', 'MIT', 'NONE']
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },

    {
        type: 'input',
        name: 'eMail',
        message: 'What is your E-Mail address?'
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know how to contribute?'
    },
    
    {
        type: 'input',
        name: 'test',
        message: 'How does the user run a test?'
    },
];

// TODO: Create a function to write README file
function writeReadMe(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {}
    inquirer.prompt(questions).then((inquirerResponse) => {
        console.log("Now creating a README.")
        writeReadMe("README.md", generateReadMe({...inquirerResponse}))
    })
// Function call to initialize app
init();
