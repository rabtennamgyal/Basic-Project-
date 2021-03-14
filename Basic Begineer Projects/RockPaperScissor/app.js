"use strict"

const score = document.querySelector('.score');
const button = document.getElementById('restart');
const choices = document.querySelectorAll('.choices');
const result = document.getElementById('result');
const modal = document.querySelector('.modal');
const scoreboard = {
    player : 0,
    computer : 0
}

function play(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

function getComputerChoice() {
    const random = Math.random();
    if (random <= 0.33) {
        return 'rock';
    } else if (random < 0.55) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

function getWinner(p, c) {
    if (p === c) {
        return 'Draw';
    }  else if (p === 'rock') {
        if (c === 'paper') {
            return 'computer'
        } else {
            return 'player';
        } 
    } else if (p === 'paper') {
        if (c === 'scissor') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'scissor') {
        if (c === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        scoreboard.player++;
        result.innerHTML = `
        <h2>You Win</h2>
        <p>Computer Chose ${computerChoice}</p>
        `
    } else if (winner === 'computer') {
        scoreboard.computer++;
        result.innerHTML = `
        <h2>You Lose</h2>
        <p>Computer Chose ${computerChoice}</p>
        `
    } else {
        result.innerHTML = `
        <h2>It is a Draw</h2>
        <p>Computer Chose ${computerChoice}</p>
        `
    }

    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `

    modal.style.display = 'block';
}

function clearModal(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}

function restart(e) {
    score.innerHTML = `
    <p>Player : 0</p>
    <p>Computer : 0</p<
    `;
    scoreboard.player = 0;
    scoreboard.computer = 0;
}

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
button.addEventListener('click', restart);