const box = document.querySelector('.box');
const boxes = document.getElementById('boxes');
const bodyy = document.querySelector('.bodyy');
const x = document.querySelector('.x');
const o = document.querySelector('.o');

let box1 = document.querySelector('.container-1');
let box2 = document.querySelector('.container-2');
let box3 = document.querySelector('.container-3');
let box4 = document.querySelector('.container-4');
let box5 = document.querySelector('.container-5');
let box6 = document.querySelector('.container-6');
let box7 = document.querySelector('.container-7');
let box8 = document.querySelector('.container-8');
let box9 = document.querySelector('.container-9');

// Setting up board as they are in the dom.
let board = [
    box1, box2, box3,   
    box4, box5, box6,   
    box7, box8, box9
];

let elX = true;
let elO;

// function for game logic to determine the winner.
function logic() {
    let arr = board.map(el => el.innerText);
    console.log(arr);
    let newArr = arr.filter(el => el !== '');
    console.log(newArr);
    if (newArr.length >= 5) {
        // for draw scenario 
        let x = arr.filter(el => el === '❌');
        let o = arr.filter(el => el === '⭕');

        if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] && arr[0] !== '') {
            setTimeout(() => {
                const div = document.createElement('div');
                div.classList.add('modal_style');
                const para = document.createElement('p');
                para.classList.add('result_style');
                para.textContent = arr[0] + 'wins';
                div.appendChild(para);
                bodyy.appendChild(div);
                // make the box disappear
                box.style.display = 'none';
            }, 1000)
        } else if (arr[0] === arr[3] && arr[0] === arr[6] && arr[0] !== '') {
            setTimeout(() => {
                const div = document.createElement('div');
                div.classList.add('modal_style');
                const para = document.createElement('p');
                para.classList.add('result_style');
                para.textContent = arr[0] + 'wins';
                div.appendChild(para);
                bodyy.appendChild(div);
                // make the box disappear
                box.style.display = 'none';
            }, 1000)
        } else if (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== '') {
            setTimeout(() => {
                const div = document.createElement('div');
                div.classList.add('modal_style');
                const para = document.createElement('p');
                para.classList.add('result_style');
                para.textContent = arr[0] + 'wins';
                div.appendChild(para);
                bodyy.appendChild(div);
                // make the box disappear
                box.style.display = 'none';
            }, 1000)
        } else if (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== '') {
            setTimeout(() => {
                const div = document.createElement('div');
                div.classList.add('modal_style');
                const para = document.createElement('p');
                para.classList.add('result_style');
                para.textContent = arr[3] + 'wins';
                div.appendChild(para);
                bodyy.appendChild(div);
                // make the box disappear
                box.style.display = 'none';
            }, 1000)
        } else if (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== '') {
            setTimeout(() => {
                const div = document.createElement('div');
                div.classList.add('modal_style');
                const para = document.createElement('p');
                para.classList.add('result_style');
                para.textContent = arr[6] + 'wins';
                div.appendChild(para);
                bodyy.appendChild(div);
                // make the box disappear
                box.style.display = 'none';
            }, 1000)
        } else if (arr[1] === arr[4] && arr[1] === arr[7] && arr[1] !== '') {
            setTimeout(() => {
                const div = document.createElement('div');
                div.classList.add('modal_style');
                const para = document.createElement('p');
                para.classList.add('result_style');
                para.textContent = arr[1] + 'wins';
                div.appendChild(para);
                bodyy.appendChild(div);
                // make the box disappear
                box.style.display = 'none';
            }, 1000)
        } else if (arr[2] === arr[5] && arr[2] === arr[8] && arr[2] !== '') {
            setTimeout(() => {
                const div = document.createElement('div');
                div.classList.add('modal_style');
                const para = document.createElement('p');
                para.classList.add('result_style');
                para.textContent = arr[2] + 'wins';
                div.appendChild(para);
                bodyy.appendChild(div);
                // make the box disappear
                box.style.display = 'none';
            }, 1000)
        } else if (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== '') {
            setTimeout(() => {
                const div = document.createElement('div');
                div.classList.add('modal_style');
                const para = document.createElement('p');
                para.classList.add('result_style');
                para.textContent = arr[2] + 'wins';
                div.appendChild(para);
                bodyy.appendChild(div);
                // make the box disappear
                box.style.display = 'none';
            }, 1000)
        } else if (x.length === 5 && o.length === 4) {
            setTimeout(() => {
                const div = document.createElement('div');
                div.classList.add('modal_style');
                const para = document.createElement('p');
                para.classList.add('result_style');
                para.textContent = 'It is a draw.';
                div.appendChild(para);
                bodyy.appendChild(div);
                // make the box disappear
                box.style.display = 'none';
            }, 1000)
        }
    } 
}

// This function add style to the current player div in html
function styleXO() {
    if (elX == true) {
        x.classList.add('styling');
        o.classList.remove('styling');
    } else {
        o.classList.add('styling');
        x.classList.remove('styling');
    }
};

styleXO();


// function that renders x and o in the dom 
function renderX(e) {
    if (e.target.innerHTML !== '') {
        return;
    } else {
        for (let i = 0; i < board.length; i++) {
            if (e.target === board[i]) {
                // create element x
                let target = board[i];
                const x = document.createElement('h2');
                x.classList.add('style');
                x.textContent = '❌';
                target.appendChild(x);
                // replace the box in the board
                board.splice(i, 1, x);
                // change elX to false so that we know its x's turn
                elX = false;
                //
                logic();
            }
        }
    }
};

function renderO(e) {
    if (e.target.innerHTML !== '') {
        return;
    } else {
        for (let i = 0; i < board.length; i++) {
            if (e.target === board[i]) {
                // create element o
                let target = board[i];
                const o = document.createElement('h2');
                o.classList.add('style');
                o.textContent = '⭕';
                target.appendChild(o);
                // replace the box in the board
                board.splice(i, 1, o);
                // change elO to false so that we know its o's turn
                elO = false;
                elX = true;
                // 
                logic();
            }
        }
    }
};


function startGame(e) {
    if (elX === true) {
        renderX(e);
        styleXO();
    } 
    renderO(e);
    styleXO();
};


document.addEventListener('click', function(e) {
    startGame(e);
});