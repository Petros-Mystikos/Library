// query selector 
const body = document.querySelector('body');
const add = document.querySelector('.add');
const readUnread = document.querySelector('.toggle-library');
const bookContainerRead = document.querySelector('.books-read');
const bookContainerUnread =document.querySelector('.books-unread');
const infoDialog = document.querySelector('.info');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const buttons = document.querySelector('.buttons');

// addEventListeners
add.addEventListener('click', () =>{
    infoDialog.showModal(); // shows the dialog
    body.classList.toggle('blured'); // toggle with the blur of the body
})

buttons.addEventListener('click', e =>{
    e.preventDefault();
    if(e.target.textContent === 'Add'){
        Card()
        infoDialog.close('close dialog');
    }
    else{
        infoDialog.close('close dialog');
    }

    body.classList.toggle('blured');
})

readUnread.addEventListener('click',e =>{
    if(e.target.textContent === 'READ'){
        e.target.textContent = 'UNREAD';
    }
    else{
        e.target.textContent = 'READ';
    }
    change();
})

// functions
function change(){
    bookContainerRead.classList.toggle('hidden');
    bookContainerUnread.classList.toggle('hidden');
}


// object constructor | array
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


// the card of the book for the Library
function Card(){
    const book = new Book(title.value, author.value, pages.value, read.checked);

    // create the content
    const card = document.createElement('div');
    const cardButtons = document.createElement('div');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const haveRead = document.createElement('button');
    const remove = document.createElement('button');
    
    // put them in the div and then in the main
    cardButtons.appendChild(haveRead);
    cardButtons.appendChild(remove);

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(cardButtons);

    // add styling 
    card.classList.add('card');
    cardButtons.classList.add('card-buttons');
    bookTitle.classList.add('card-title');
    bookAuthor.classList.add('card-author');
    bookPages.classList.add('card-pages');
    haveRead.classList.add('card-haveRead');
    remove.classList.add('card-remove');

    // add the text
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;

    if(book.read){
        haveRead.textContent = "I haven't read it";
        bookContainerRead.appendChild(card);
    }
    else{
        haveRead.textContent = "I have read it";
        bookContainerUnread.appendChild(card);
    }
    remove.textContent = 'Remove book';

    // addEVntListeners
    haveRead.addEventListener('click', e => {
        if(e.target.textContent === 'I have read it'){
            e.target.textContent = "I haven't read it";
            bookContainerUnread.removeChild(card);
            bookContainerRead.appendChild(card);
        }
        else{
            e.target.textContent = 'I have read it'
            bookContainerRead.removeChild(card);
            bookContainerUnread.appendChild(card);
        }
    })

    remove.addEventListener('click', e =>{
        if(haveRead.textContent ==="I haven't read it"){
            bookContainerRead.removeChild(card);
        }
        else{
            bookContainerUnread.removeChild(card);
        }
    })
}

