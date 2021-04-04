//'use strict';
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const submit = document.querySelector('.submit');
const bookDiv = document.querySelector('.books');

function clearModal() {
    // Might need to change this later
    if (modal.style.display = 'none') {
        return;
    } else {
        modal.style.display = 'none';
    }
};

function clearModalContent() {
    const author = document.querySelector('.author').value = '';
    const title = document.querySelector('.book__title').value = '';
    const genres = document.querySelector('.genres').value = '';
    const isbn = document.querySelector('.isbn').value = '';
};


class Book {
    constructor(author, title, genres, isbn) {
        this.author = author;
        this.title = title;
        this.genres = genres;
        this.isbn = isbn;
    }
}

class displayBook {
    // Static methods are methods attach to the contructor of the object.
    // It cannot be accessed by the instances of the objects, but can
    // only be used on the object it self.
    static createBook() {
        // Get form values from the modal 
        const author = document.querySelector('.author').value;
        const title = document.querySelector('.book__title').value;
        const genres = document.querySelector('.genres').value;
        const isbn = document.querySelector('.isbn').value;
        if (!author || !title || !genres || !isbn) {
            return;
        } else {
            // Create div element for book card 
            const newBook = new Book(author, title, genres, isbn);
            // Create bookCard div in the empty book div
            const bookCard = document.createElement('div');
            bookCard.classList.add('book__card');
            bookCard.innerHTML = `
            <div class='infoDiv'>
            <p class='infoStyle'>${newBook.author}</p>
            <p class='infoStyle'>${newBook.title}</p>
            <p class='infoStyle'>${newBook.genres}</p>
            <p class='infoStyle'>${newBook.isbn}</p>
            </div>
            <div class='flexDiv'>
            <button class='read'>✅</button>
            <button class='delete'>❌</button>
            </div>
            `;
            bookDiv.appendChild(bookCard);
            clearModal();
            clearModalContent();
            // Using bubbling to add eventlisteners on dynamic html buttons 
            bookCard.addEventListener('click', function(e) {
                if (e.target.classList.contains('read')) {
                    bookCard.style.background = '#1cf31c';
                }
            
                if (e.target.classList.contains('delete')) {
                    bookDiv.removeChild(bookCard);
                }
            });
        }
    }
}

submit.addEventListener('click', displayBook.createBook);


const add = document.querySelector('.add');
const cancel = document.querySelector('.cancel');

add.addEventListener('click', function(e) {
    modal.style.display = 'grid';
});

cancel.addEventListener('click', function(e) {
    modal.style.display = 'none';
});









































const quoteDiv = document.querySelector('.quotes');

const quotes = [
    '"Forget safety. Live where you fear to live. Destroy your reputation. Be notorious" - Rumi',
    '"Opportunity is missed by people because it is dressed in overalls and looks like work. - Thomas Edison"',
    '"It is said that your life flashes before your eyes just before you die. That is true, it\'s called Life. - Terry Pratchet"',
    '"Raise your words, not voice. It is rain that grows flowers, not thunder." - Rumi',
    '"Live life as if everything is rigged in your favor." - Rumi',
    'Don\'t watch the clock. Do what it does. Keep going." - Sam Levenson',
    '"We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty." - Maya Angelou',
    '"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge." - Stephen Hawking',
    '"You cannot cross the ocean unless you have courage to lose sight of the shore." - Japanese Proverb',
    '"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times." - Bruce Lee',
    '"In theory there is no difference between theory and practice. In practice there is." - Yogi Berra',
    '"It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things." - Leonardo da Vinci',
    '"Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step." - Lao Tzu',
    '"Controlling complexity is the essence of computer programming." - Brian Kernighan',
    '"Quality is not an act, it is a habit." - Aristotle',
    '"Creativity is intelligence having fun." - Albert Einstein',
    '"If you\'re not making mistakes, then you\'re not making decisions." - Catherine Cook',
    '"We first make our habits, then our habits make us." - John Dryden',
    '"By seeking and blundering we learn." - Johann Wolfgang von Goethe',
    '"I attribute my success to this - I never gave or took any excuse." - Florence Nightingale',
    '"There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self." - Ernest Hemingway',
    '"The best way out is always through." - Robert Frost',
    '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." -Martin Fowler',
    'Light tomorrow with today." - Elizabeth Barrett Browning',
    '"Computers are good at following instructions, but not at reading your mind." - Donald Knuth',
    '"Life shrinks or expands in proportion with one\'s courage." - Anaïs Nin',
    '"A person who never made a mistake never tried anything new." - Albert Einstein',
    '"A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing." - George Bernard Shaw',
    '"Tell me and I forget. Teach me and I remember. Involve me and I learn." - Benjamin Franklin',
    '"Don\'t let yesterday take up too much of today." - Will Rogers',
    '"It does not matter how slowly you go as long as you do not stop." - Confucius',
    '"The secret of getting ahead is getting started." - Mark Twain',
    '"There are no short cuts to any place worth going." - Beverly Sills',
    '"Someday is not a day of the week." - Denise Brennan-Nelson',
    '"You can\'t cross the sea merely by standing and staring at the water." - Rabindranath Tagore',
    '"The harder I work, the luckier I get." - Gary Player',
    'An ant on the move does more than a dozing ox." - Lao Tzu',
    '"Whether you think you can or think you can\'t, you\'re right." - Henry Ford'
];

window.onload = function randomQuote() {
    let random = quotes.sort(() => Math.random() - 0.5);
    quoteDiv.innerHTML = random[0];
};

