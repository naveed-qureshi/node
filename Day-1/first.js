const variable = 'Hellow world!';
console.log(variable)

const fs = require('fs');

const inputText = fs.readFileSync('./input.txt', 'utf-8');
console.log(inputText);
const outputText = 'This is my first ouput file in node';
fs.writeFileSync('./output.txt', outputText);