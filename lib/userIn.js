const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./shapes.js');

function writeFile(shape) {
    console.log(shape.render());
    const shapeData = shape.render();
    fs.writeFile('logo.svg', shapeData, (err) =>
                err
                    ? console.log(err)
                    : console.log("Generated logo.svg")
            );
}

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
            //console.log(data);

            if (data.shape === 'Circle') {
                const shape = new shapes.Circle(data.characters, data.textColor, data.shapeColor);
                console.log(shape);
                writeFile(shape);
            } else if (data.shape === 'Triangle') {
                const shape = new shapes.Triangle(data.characters, data.textColor, data.shapeColor);
                console.log(shape);
                writeFile(shape);
            } else {
                const shape = new shapes.Square(data.characters, data.textColor, data.shapeColor);
                console.log(shape);
                writeFile(shape);
            }
        });
}


module.exports = {userInput};