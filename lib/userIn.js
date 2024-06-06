const inquirer = require('inquirer');
const fs = require('fs');

function userInput() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter up to three characters for your logo",
                name: "characters",
            },
            {
                type: "input",
                message: "Please enter a color or hexdecimal number for your desired color of the text",
                name: "textColor",
            },
            {
                type: "list",
                message: "Please select a shape for your logo",
                name: "shape",
                choices: [
                    "Circle",
                    "Triangle",
                    "Square",
                ],
            },
            {
                type: "input",
                message: "Please enter a color or hexdecimal number for your desired color of the shape",
                name: "shapeColor",
            },
        ])
        .then((data) => {
            console.log(data);
            /*
            fs.writeFile('logo.svg', data, (err) =>
                err
                    ? console.log(err)
                    : console.log("Generated logo.svg")
            );
            */
        });
    }

module.exports = {userInput};