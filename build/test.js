"use strict";
const a = 4;
const b = 6;
const c = parseInt('5');
const d = 'cat';
const add = (num1, num2) => {
    console.log(`type of Num1`, typeof num1);
    console.log(`type of Num2`, typeof num2);
    console.log(`${num1} + ${num2} = ${num1 + num2} `, num1 + num2);
};
add(a, c);
