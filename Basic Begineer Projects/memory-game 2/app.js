'use strict';

const cards = document.querySelectorAll('.memory-card');

let firstcard, secondcard;
let flipped = false;
let lock = false;


function flipCard() {
    if (lock) return;
    if (this === firstcard) return;

    this.classList.add('flip');
    
    if (!flipped) {
        flipped = true;
        firstcard = this;
        return;
    }
    secondcard = this;
    check();
};

function check() {
    let match = firstcard.dataset.framework === secondcard.dataset.framework;
    match ? disable() : unflip();
}

function disable() {
    firstcard.removeEventListener('click', flipCard);
    secondcard.removeEventListener('click', flipCard);
    reset();
    final();
};

function unflip() {
    lock = true;
    setTimeout(() => {
        firstcard.classList.remove('flip');
        secondcard.classList.remove('flip');
        reset();
    }, 1000);
};

function reset() {
    [flipped, lock] = [false, false];
    [firstcard, secondcard] = [null, null];
}

(function shuff() {
    cards.forEach(el => {
        let random = Math.floor(Math.random() * 12);
        el.style.order = random;
    })
})();


function final() {
    setTimeout(() => {
        let arr = Array.from(cards);
        let finished = arr.map(el => el.classList.contains('flip')).filter(el => el !== false);
        if (finished.length === 12) {
            const board = document.querySelector('.memory-game');
            const greet = document.querySelector('.congrats');
            board.style.display = 'none';
            greet.style.display = 'grid';
        }
    }, 2000);
};




cards.forEach(card => card.addEventListener('click', flipCard));