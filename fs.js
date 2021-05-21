const fs = require('fs');

/** Synchronous code */

// const helloWorld = fs.readFileSync('./assets/txtFiles/helloworld.txt', 'utf8');
// fs.writeFileSync(
//   './assets/txtFiles/newfile.txt',
//   '6 This is new Line of me \n',
//   {
//     flag: 'a',
//   }
// );
// const newFile = fs.readFileSync('./assets/txtFiles/newfile.txt', 'utf8');
// console.log(newFile);

/** Asynchronous code */

fs.readFile('./assets/txtFiles/helloworld.txt', 'utf8', (err, result) => {
  if (err) {
    return console.log('ERROR: ', err);
  }
  const helloW = result;
  console.log('RESULT: ', result);
  fs.writeFile(
    './assets/txtFiles/newFile.md',
    `${helloW} 3th text \n`,
    {
      flag: 'a',
    },
    (err, result) => {
      if (err) {
        return console.log('ERROR: ', err);
      }
      console.log(fs.readFileSync('./assets/txtFiles/newFile.md', 'utf8'));
    }
  );
});
