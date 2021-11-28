const fs = require('fs');

fs.readFile('./txt/start.txt', 'utf-8', (error, data) => {
  if(error) return console.log('file does not exit');
  console.log(data);
  fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, text) => {
    console.log(text);
    fs.readFile('./txt/append.txt', 'utf-8', (masla, tehrir) => {
      console.log(tehrir);
      fs.writeFile('./txt/result.txt', `${text}\n${tehrir}`, err => {
        if (err) return console.log('Unable to write file');
      });
    });
  });
});
