let secretNumber =  Math.trunc(Math.random() * 10 + 1);
let high = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.input').value);

    if (secretNumber === guess) {
        score++;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.a-text').textContent = 'You got it 🎉';
        document.querySelector('.b-text').innerHTML = `Score 🥇 : ${score}`;

        let high = score;
        document.querySelector('.c-text').innerHTML = `HighScore 🏆 : ${high}`;

    } else if (secretNumber < guess) {
        score--;
        document.querySelector('.a-text').innerHTML = 'To high 🎈';
        document.querySelector('.b-text').innerHTML = `Score 🥇 : ${score}`;
    } else if (secretNumber > guess) {
        score--;
        document.querySelector('.a-text').innerHTML = 'To low 🥽';
        document.querySelector('.b-text').innerHTML = `Score 🥇 : ${score}`;
    }
});


const again = document.querySelector('.btn');

again.addEventListener('click', function() {
    let score = 20;
    document.querySelector('.a-text').innerHTML = 'Good Luck 🥑';
    document.querySelector('.b-text').innerHTML = `Score 🥇 : ${score}`;
    document.querySelector('.input').value = '';
    document.querySelector('.number').textContent = '?';
});


