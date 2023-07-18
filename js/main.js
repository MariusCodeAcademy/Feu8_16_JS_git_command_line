'use strict';
console.log('main.js file was loaded');

function sum(a, b, c) {
  return a + b + c;
}

function printToHtml(whatToPrint) {
  const dest = document.getElementById('output');
  dest.append(whatToPrint);
}
