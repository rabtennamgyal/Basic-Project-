const input = document.querySelector('.input-field');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list-item-two');
const ulList = document.querySelector('.ul-list');

// Add list code starts here 

const addList = function(e) {
    if (input.value) {
        // Create a new div 
        const newDiv = document.createElement('div');
        newDiv.classList.add('todo');

        // Create a new Check button
        const checkBtn = document.createElement('button');
        checkBtn.innerHTML = '<i class="fas fa-check"></i>';
        checkBtn.classList.add('check-btn');
        newDiv.appendChild(checkBtn);
        

        // Create a new list
        const newList = document.createElement('li');
        newList.classList.add('list-style');
        newList.textContent = input.value;
        newDiv.appendChild(newList);


        //Create a new Trash button
        const trashBtn = document.createElement('button');
        trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
        trashBtn.classList.add('trash-btn');
        newDiv.appendChild(trashBtn);
        

        ulList.appendChild(newDiv);
        input.value = '';
    }
};

btn.addEventListener('click', addList);

// Add list code ends here 


// Delete list code starts here

const deleteList = function(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
};

ulList.addEventListener('click', deleteList);

// Delete list code ends here


// Check list code starts here 

const checkList = function(e) {
    const item = e.target;
    if (item.classList[0] === 'check-btn') {
        const todo = item.parentElement;
        todo.textContent = 'DONE';
    }
};

ulList.addEventListener('click', checkList);
