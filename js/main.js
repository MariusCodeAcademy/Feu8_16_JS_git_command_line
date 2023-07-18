'use strict';
console.log('main.js file was loaded');

function sum(a, b, c) {
  return a + b + c;
}

function printToHtml(whatToPrint) {
  const dest = document.getElementById('output');
  dest.append(whatToPrint);
}

const mySum1 = sum(5, 10, 15);
console.log('mySum1 ===', mySum1);
printToHtml(mySum1);
printToHtml(' so it works');
