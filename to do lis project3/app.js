"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todos = [];
var todoQuestions = await inquirer_1.default.prompt([{
        name: "firstQuestion",
        message: "what would you like to add in you todos?",
        type: "input",
    },
    {
        name: "secondQuestion",
        type: "confirm",
        message: "would you like to add more in your todos",
        default: "true"
    }]);
var todo;
todos.push(todoQuestions.firstQuestion);
console.log(todos);
