const fs = require('fs');

// TASK 1. Read a text in the file (Asynchronous)
fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('errorrrrrrr');
  }
  console.log('1' + data.toString());
});

// TASK 2. Add a text in the file
fs.appendFile('./hello.txt', 'How are you', err => {
  if (err) {
    throw err;
  }
  console.log('2 - Saved!');
});

// TASK 3. Read a text in the file (Synchronous)
const file = fs.readFileSync('./hello.txt');
console.log('3' + file.toString());

// TASK 4. Create a new txt file
fs.writeFile('./hola.txt', 'This is new text', err => {
  if (err) {
    throw err;
  }
  console.log('4 - New File Created!');

  // TASK 5. Read the newly created file
  const file2 = fs.readFileSync('./hola.txt');
  console.log('5' + file2.toString());
});

// TASK 6. Delete a file
fs.unlink('./hola.txt', err => {
  if (err) {
    throw err;
  }
  console.log('6 - hola file has been deleted');
});
