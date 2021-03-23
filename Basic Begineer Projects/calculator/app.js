'use strict';
// Below are all the variables of the symbols needed for calculation
const input = document.querySelector('.input');
const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const clear = document.querySelector('.clear');
const dot = document.querySelector('.dot');
const calc = document.querySelector('.equal'); 
// Below are all the variables of the numbers for calculation
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
// 1. First make the numbers & symbols appears on the input field 

let sol = []; // input value to be calculated in next functions

function addNum(e) {
    if (e.target.classList.contains('button')) {
        let value = parseInt(e.target.textContent);
        input.value += value;
        sol.push(value);
    } else if (e.target.classList.contains('add')) {
        let value = e.target.textContent;
        input.value += '+';
        sol.push(value);
    } else if (e.target.classList.contains('minus')) {
        let value = e.target.textContent;
        input.value += '-';
        sol.push(value);
    } else if (e.target.classList.contains('multiply')) {
        let value = e.target.textContent;
        input.value += '*';
        sol.push(value);
    } else if (e.target.classList.contains('divide')) {
        let value = e.target.textContent;
        input.value += '%';
        sol.push(value);
    } else if (e.target.classList.contains('dot')) {
        let value = e.target.textContent;
        input.value += '.';
        sol.push(value);
    } else if (e.target.classList.contains('clear')) {
        input.value = '';
        sol = [];
    } else {
        return;
    }
} 

// 2. Do the arithmetics 
function dothemath() {
    if (!input.value) {
        let arr = sol;
        let str = arr.join('').split('').filter(el => el !== " ").join('').replace(/\n/g, '').split(/[^/\d/|.]/);
        let op = arr.join('').split('').filter(el => el !== " ").join('').replace(/\n/g, '').split('');
        let sign;
        for (let i = 0; i < op.length; i++) {
            if (op[i] === '+' || op[i] === '-' || op[i] === '%' || op[i] === '*') {
                sign = op[i];
            }
        };
        let x = parseFloat(str[0]);
        let y = parseFloat(str[1]);
        
        if (sign === '+') {
            let sum = x + y;
            input.value = sum;
        } else if (sign === '-') {
            let subs = x - y;
            input.value = subs;
        } else if (sign === '*') {
            let pro = x * y;
            input.value = pro;
        } else if (sign === '%') {
            let div = x / y;
            input.value = div;
        }
    } else {
        let arr = [input.value];
        let str = arr.join('').split('').filter(el => el !== " ").join('').replace(/\n/g, '').split(/[^/\d/|.]/);
        let op = arr.join('').split('').filter(el => el !== " ").join('').replace(/\n/g, '').split('');
        let sign;
        for (let i = 0; i < op.length; i++) {
            if (op[i] === '+' || op[i] === '-' || op[i] === '%' || op[i] === '*') {
                sign = op[i];
            }
        };
        let x = parseFloat(str[0]);
        let y = parseFloat(str[1]);
        
        if (sign === '+') {
            let sum = x + y;
            input.value = sum;
        } else if (sign === '-') {
            let subs = x - y;
            input.value = subs;
        } else if (sign === '*') {
            let pro = x * y;
            input.value = pro;
        } else if (sign === '%') {
            let div = x / y;
            input.value = div;
        }
    }
}

document.addEventListener('click', addNum);
calc.addEventListener('click', dothemath);