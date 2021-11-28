const fs = require('fs');

const fileIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(fileIn);

fs.writeFileSync('./txt/output.txt', `${fileIn} \n create at ${Date.now()}`);


const hello = 'Hello world!';
console.log(hello)
