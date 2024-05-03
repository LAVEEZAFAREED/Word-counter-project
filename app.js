#! /usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt({
    name: "Sentence",
    type: "input",
    message: "Please enter sentence or paragraph we count words:"
});
const word = answer.Sentence.trim().split(" ");
console.log(`Your sentence word count is ${word.length}`);
