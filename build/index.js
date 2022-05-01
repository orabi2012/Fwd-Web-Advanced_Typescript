"use strict";
// NOTE: This code has not been converted to TypeScript yet
// const arrays = require('./utilities/arrays.js');
// const numbers = require('./utilities/numbers.js');
// const strings = require('./utilities/strings.js');
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_js_1 = require("./utilities/arrays.js");
const numbers_js_1 = require("./utilities/numbers.js");
const strings_js_1 = require("./utilities/strings.js");
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays_js_1.default.addArr(numArr);
const mixArr = arrays_js_1.default.concatArr(numArr, wordArr);
const myNum = '15' % 2;
const five = parseInt('5');
// results of function calls
console.log(arrays_js_1.default.cut3(mixArr));
console.log(numbers_js_1.default.sum(arrSum, myNum));
console.log(strings_js_1.default.capitalize('the quick brown fox'));
console.log(numbers_js_1.default.multiply(five, 8));
console.log(arrays_js_1.default.lgNum(mixArr));
