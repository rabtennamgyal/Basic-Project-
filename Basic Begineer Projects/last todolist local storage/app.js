const input = document.querySelector('.input');
const add = document.querySelector('.add');
const del = document.querySelector('.del');
const ul = document.querySelector('ul');


let arr = localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : [];
localStorage.setItem('todolist', JSON.stringify(arr));
const data = JSON.parse(localStorage.getItem('todolist'));


function limaker(text) {
    const div = document.createElement('div');
    div.classList.add('style-div');
    const li = document.createElement('li');
    li.textContent = text;
    li.classList.add('li-style');
    div.appendChild(li);
    ul.appendChild(div);
}

add.addEventListener('click', function() {
    arr.push(input.value);
    localStorage.setItem('todolist', JSON.stringify(arr));
    limaker(input.value);
    input.value = '';
});

del.addEventListener('click', function() {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
});

data.forEach((el) => {
    limaker(el);
})

