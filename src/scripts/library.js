import '../styles/reset.css';
import '../styles/style.css';

const library = [];

function Book(title, author, pageCount, isRead) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.isRead = isRead;
}
Book.prototype.setIsRead = function(b) {
  this.isRead = b;
};


const bookCntr = document.querySelector('.library');
const modalAddBookCntr = document.querySelector('#modal-container-addbook');
const bookStats = {
  totalBooks: document.querySelector('#total-books'),
  booksRead: document.querySelector('#books-read'),
  pagesRead: document.querySelector('#pages-read'),
}

// * Element generators

function initModalAddBook() {
  // ADD FORM ELEMENTS
  modalAddBookCntr.querySelector('.modal').appendChild(getCloseButton(() => {
    modalAddBookCntr.classList.add('hidden');
    Array.from(modalAddBookCntr.querySelectorAll('input')).forEach(input => {
      input.value = '';
      input.checked = false;
    });
  }));

  const modalFormBtn = modalAddBookCntr.querySelector('form').querySelector('button');
  
  modalFormBtn.addEventListener('click', () => {
    if (!validateForm(modalAddBookCntr)) {
      return;
    }

    const bookArgs = [];
    Array.from(modalAddBookCntr.querySelectorAll('input')).forEach(input => {
      bookArgs.push(input.type === 'checkbox' ? input.checked : input.value);
      input.value = '';
      input.checked = false;
    });

    const book = new Book(...bookArgs);
    library.push(book);
    bookCntr.appendChild(getBookElm(book));
    modalAddBookCntr.classList.toggle('hidden');
    updateLibrary();
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
    library[library.indexOf(book)].setIsRead(status);
    if (status) {
      bookElm.classList.add('semi-transparent');
    } else {
      bookElm.classList.remove('semi-transparent');
    }
    updateLibrary();
  });

  const bookPropElms = [bookTitle, bookAuthor, bookPageCount, bookIsRead];
  bookPropElms.forEach(bookPropElm => {
    bookElm.appendChild(bookPropElm);
  });

  const deleteBookBtn = getCloseButton(() => {
    library.splice(library.findIndex(b => b.title === book.title), 1);
    bookCntr.removeChild(bookElm);
    updateLibrary();
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

// * FORM VALIDATION
function validateForm(formContainer) {
  const inputs = formContainer.querySelectorAll('input[required]');

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      console.log(`validation failed on input ${inputs[i].name}`);
      validationFailDisplay(inputs[i],'Please fill out this field!', 1);
      return false;
    }

    if (inputs[i].name='title' && library.find((book) => 
          book.title === inputs[i].value)) {
      console.log(`validation failed on input ${inputs[i].name} (Can't have multiple books with the same title!)`);
      validationFailDisplay(inputs[i], 'Title must be unique!', 1);
      return false;
    }
    if (inputs[i].type === 'number' && inputs[i].value < 1) {
      console.log(`validation failed on input ${inputs[i].name} (you can't have negative pages, silly!)`);
      validationFailDisplay(inputs[i], 'Page count can\'t be negative!', 1);
      return false;
    }
  }

  return true;
}

function validationFailDisplay(element, msg, decay) {
  element.classList.remove('validation-failed');
  window.clearTimeout(timeout);
  element.classList.add('validation-failed');
  element.style.animationDuration = decay + 's';
  
  const popup = document.createElement('div');
  popup.classList.add('card');
  popup.classList.add('form-validation-error');
  popup.textContent = msg;
  element.parentElement.appendChild(popup);
  window.setTimeout(timeout, decay * 1000);

  function timeout() {
    element.classList.remove('validation-failed');
    popup.remove();
  }
}

// * LIBRARY STATS
function updateFooterData() {
  bookStats.totalBooks.textContent = library.length;
  bookStats.booksRead.textContent = getBooksRead(library);
  bookStats.pagesRead.textContent = getPagesRead(library);
}

function getBooksRead(libArray) {
  return libArray.reduce((sum, book) =>
    book.isRead ? ++sum : sum, 0
  );
}
function getPagesRead(libArray) {
  return libArray.reduce((sum, book) =>
    book.isRead ? sum + (+book.pageCount) : sum, 0
  );
}

// * LocalStorage Handling
function saveLibrary() {
  var libJSON = JSON.stringify(library);
  window.localStorage.setItem('libraryRecord', libJSON);
}

function loadLibrary() {
  const libraryRecord = window.localStorage.getItem('libraryRecord');

  if (!libraryRecord || libraryRecord == {}) {
    loadDemoBooks();
  } else {
    JSON.parse(libraryRecord).forEach(book => {
      const fullBook = new Book(book.title, book.author, book.pageCount, book.isRead);
      library.push(fullBook);
    });
    library.forEach(book => bookCntr.appendChild(getBookElm(book)));
  }
}

function loadDemoBooks() {
  const demoBooks = [
    new Book('Learning JavaScript Design Patterns', 'Addy Osmani', 246, false),
    new Book('Introduction to Algorithms', 'Thomas H. Cormen, et al.', 1312, true),
    new Book('The Pragmatic Programmer', 'Andrew Hunt, Dave Thomas', 320, false),
    new Book('Clean Code', 'Robert Martin', 400, false),
    new Book('The DevOps Handbook', 'Gene Kim, et al.', 480, false),
    new Book('Grokking Algorithms', 'Aditya Bhargava', 256, true),
  ];
  demoBooks.forEach(book => library.push(book));
  library.forEach(book => bookCntr.appendChild(getBookElm(book)));
}

function updateLibrary() {
  updateFooterData();
  saveLibrary();
  console.log('library updated');
}

document.querySelector('.add-book-btn').addEventListener('click', () => {
  modalAddBookCntr.classList.toggle('hidden');
});

initModalAddBook();
loadLibrary();
updateFooterData();