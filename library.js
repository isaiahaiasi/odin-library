// Using a map instead of an array b/c main use will be getting a book by key
// (book dom element finding its entry in map to delete, toggle isRead, etc)
const library = new Map();

function Book(title, author, pageCount, isRead) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.isRead = isRead;
}
Book.prototype.setIsRead = function(b) {
  this.isRead = b;
};

// !TEMP FOR TESTING!
const testBooks = [
  new Book('The Hobbit', 'Gandalf', 67, false, 0),
  new Book('The Martian', 'Weir', 310, true, 4),
  new Book('Pragmatic Programmer', 'Idk', 270, false, 3),
  new Book('Clean Code', 'Avuncular Robert', 400, false, 2),
  new Book('Name of the Wind', 'Pat Rothfuss', 800, true, 4),
  new Book('LOTR', 'JRR Tolkein', 600, true, 4),
];

testBooks.forEach(book => library.set(book.title, book));
// !ENDTEMP!

function addBookToLibraryFromBtn() {
  const constructorInputs = getNewBookPrompt();

  if (Book.length === constructorInputs.length) {
    const newBook = new Book(...constructorInputs);
    library.set(newBook.title, newBook);
    addBookToDom(newBook);
    return true;
  } else {
    // Throw an error
    console.log('ERROR trying to add book to library--wrong number of inputs.');
    return false;
  }
}

function getNewBookPrompt() {
  const newProps = [];
  newProps.push(prompt('What is the book\'s title?'));
  newProps.push(prompt('Who is the author?'));
  newProps.push(prompt('How many pages long is it?'));
  newProps.push(prompt('Have you read it?'));
  return newProps;
}

// * === DOM === *
const bookCntr = document.querySelector('.library');
const modalAddBookCntr = document.querySelector('#modal-container-addbook');

// * Element generators

function initModalAddBook() {
  // ADD FORM ELEMENTS
  modalAddBookCntr.querySelector('.modal').appendChild(getCloseButton(() => {
    modalAddBookCntr.classList.add('hidden');
  }));

  const modalFormBtn = modalAddBookCntr.querySelector('form').querySelector('button');
  
  modalFormBtn.addEventListener('click', () => {
    const bookArgs = [];
    Array.from(modalAddBookCntr.querySelectorAll('input')).forEach(input => {
      bookArgs.push(input.type === 'checkbox' ? input.checked : input.value);
      input.value = '';
      input.checked = false;
    });

    const book = new Book(...bookArgs);
    library.set(book.title, book);
    addBookToDom(book);
    modalAddBookCntr.classList.toggle('hidden');
  });
}

function getBookElm(book) {
  const bookElm = document.createElement('div');

  const bookTitle = getBookPropertyElm(book, 'title');
  const bookAuthor = getBookPropertyElm(book, 'author');
  const bookPageCount = getBookPropertyElm(book, 'pageCount');
  
  const bookIsRead = getSwitch('is read:', 'isRead', book.isRead);
  bookIsRead.addEventListener('change',() => {
    const status = bookIsRead.querySelector('input').checked;
    console.log(`checked status: ${status}`);
    library.get(book.title).setIsRead(status);
    if (status) {
      bookElm.classList.add('semi-transparent');
    } else {
      bookElm.classList.remove('semi-transparent');
    }
  });

  const bookPropElms = [bookTitle, bookAuthor, bookPageCount, bookIsRead];
  bookPropElms.forEach(bookPropElm => {
    bookElm.appendChild(bookPropElm);
  });

  const deleteBookBtn = getCloseButton(() => {
    library.delete(book.title);
    bookCntr.removeChild(bookElm);
  });
  deleteBookBtn.classList.add('hidden');
  bookElm.appendChild(deleteBookBtn);
  
  ['mouseenter','mouseleave'].forEach((cardEvent) => {
    bookElm.addEventListener(cardEvent, () => {
      deleteBookBtn.classList.toggle('hidden');
    });
  });

  bookElm.classList.add('book');
  bookElm.classList.add('card');
  if (book.isRead) {
    bookElm.classList.add('semi-transparent');
  }
  bookElm.setAttribute('data-booktitle',book.title);

  return bookElm;
}

function getBookPropertyElm(book, property) {
  const bookPropertyElm = document.createElement('div');
  bookPropertyElm.textContent = book[property];
  bookPropertyElm.classList.add('book-prop');
  bookPropertyElm.classList.add(`book-${property}`);

  return bookPropertyElm;
}

function getSwitch(label, name, isChecked) {
  const inputElm = document.createElement('label');
  inputElm.classList.add('switch');

  const textElm = document.createElement('span');
  textElm.textContent = label;
  textElm.classList.add('switch-label');
  inputElm.appendChild(textElm);
  
  const inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';
  inputCheckbox.name = name;
  inputCheckbox.checked = isChecked;
  inputElm.appendChild(inputCheckbox);
  
  const inputSpanElm = document.createElement('span');
  inputSpanElm.classList.add('switch-span');
  inputElm.appendChild(inputSpanElm);
  
  return inputElm;
}

function getCloseButton(func) {
  const closeBtn = document.createElement('div');
  closeBtn.classList.add('close-btn');
  closeBtn.addEventListener('click', func)
  return closeBtn;
}

function addLibraryToDOM() {
  library.forEach(book => bookCntr.appendChild(getBookElm(book)));
}

function addBookToDom(book) {
  bookCntr.appendChild(getBookElm(book));
}

document.querySelector('.add-book-btn').addEventListener('click', () => {
  modalAddBookCntr.classList.toggle('hidden');
});

initModalAddBook();
addLibraryToDOM();