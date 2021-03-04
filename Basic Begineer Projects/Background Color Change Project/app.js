const btn = document.querySelector('.change-btn');
const header = document.querySelector('.header');

const colors = ['#09e209fd', '#fd0505fd', '#06aaf7fd', '#f78706fd', 
'#f7f306fd', '#ff2ecbfd', '#9a2efffd', '#2efff5fd', '#2eff9dfd', 
'#2e82fffd', '#996684fd', '#ffe91efd', '#ff651efd'];


const changeColor = function (e) {
    let randomColor = colors.sort(() => Math.random() - 0.5);

    header.style.background = randomColor[0];
};

btn.addEventListener('click', changeColor);

