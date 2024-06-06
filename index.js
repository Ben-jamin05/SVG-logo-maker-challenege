const inquirer = require('inquirer');

function main() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter up to three characters for your logo",
                name: "characters",
            },
            {
                type: "input",
                message: "Please enter a color or hexdecimal number for your desired color",
                name: "color",
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
        ])
        .then((data) => {
            console.log(data);
        });
}

main();