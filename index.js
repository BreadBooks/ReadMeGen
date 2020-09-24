const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./utils/generateMarkDown")

// array of questions for user
// "" = input
const questions = [{
    type: "",
    name: "title",
    message: "What is the name of your project?",
},
    {
    type: "",
    name: "description",
    message: "Describe your project",
    
},
    {
        type: "",
        name: "installation",
        message: "How can the user install this?",
    },
    {
        type: "",
        name: "usage",
        message: "How should this project be used?",
    }


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markDown(data), function(error) {
        if (error) {
            console.log("Error Occured", error);
        } else {
            console.log("ReadME Created.")
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
.then(function (data) {
    writeToFile("README.md", data)
});
}

// function call to initialize program
init();