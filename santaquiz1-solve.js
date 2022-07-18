const fs = require('fs');

// My Solution to Santa's question 1
function question1() {
  fs.readFile('./santaquiz1.txt', (err, data) => {
    console.time('santa1');
    const result = data.toString();
    const upFloor = result.match(/\(/g);
    const downFloor = result.match(/\)/g);
    console.log(upFloor.length - downFloor.length);
    console.timeEnd('santa1');
  });
}
// question1();

// Teacher's Solution to Santa's question 2
function question1_2() {
  fs.readFile('./santaquiz1.txt', (err, data) => {
    console.time('santa1');
    const result = data.toString();
    const upFloor = result.match(/\(/g);
    const downFloor = result.match(/\)/g);
    console.log(upFloor.length - downFloor.length);
    console.timeEnd('santa1');
  });
}
// question1_2();

function question1_2() {
  fs.readFile('./santaquiz1.txt', (err, data) => {
    console.time('santa1_2');
    const array = data.toString().split('');
    const answer = array.reduce((acc, currentValue) => {
      if (currentValue === '(') {
        return (acc += acc + 1);
      } else if (currentValue === ')') {
        return (acc -= acc - 1);
      }
    }, 0);
    console.log(answer);
    console.timeEnd('santa1_2');
  });
}
// question1_2();

// My Solution to Santa's question 2
function question2() {
  fs.readFile('./santaquiz1.txt', (err, data) => {
    console.time('santa2');
    let theIndex = [];
    let initialValue = 0;
    data
      .toString()
      .split('')
      .reduce((prev, curr, index) => {
        curr = curr === '(' ? 1 : -1;
        const cal = prev + curr;
        if (cal < 0) {
          theIndex.push(index);
        }
        return cal;
      }, initialValue);
    console.log(theIndex[0] + 1);
    console.timeEnd('santa2');
  });
}

question2();

// Teacher's Solution to Santa's question 2
function question2_1() {
  fs.readFile('./santaquiz1.txt', (err, data) => {
    console.time('santa2-2');
    if (err) {
      throw err;
    }
    const dataArray = data.toString().split('');

    let accumulator = 0;
    let index = 0;
    const answer = dataArray.some(currentValue => {
      if (currentValue === '(') {
        accumulator += 1;
      } else if (currentValue === ')') {
        accumulator -= 1;
      }
      if (accumulator < 0) {
        return index;
      }
      index++;
    });

    console.log(index + 1);
    console.timeEnd('santa2-2');
  });
}

question2_1();
