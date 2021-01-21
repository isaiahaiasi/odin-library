// Using a map instead of an array b/c main use will be getting a book by key
// (book dom element finding its entry in map to delete, toggle isRead, etc)
const library = new Map();

function Book(title, author, pageCount, isRead, rating) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.isRead = isRead;
}
Book.prototype.info = function() {
  return `${this.title} by ${this.author}`;
}

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

function addBookToLibrary() {
  // Take input for each constructor field & push to inputs array
  const constructorInputs = getNewBookPrompt();

  if (Book.length === constructorInputs.length) {
    const newBook = new Book(...constructorInputs);
    library.set(newBook.title, newBook);
    addBookToDom(newBook);
    return true;
  } else {
    // Throw an error
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

// * DOM
const bookCntr = document.querySelector('.library');
const modalAddBookCntr = document.querySelector('#modal-container-addbook');

// Add any generated HTML to the page (ie, the form fields...)
function initModalAddBook() {
  // Add bg
  // const modalBG = document.createElement('div');
  // modalBG.classList.add('modal-bg');
  // modalAddBookCntr.appendChild(modalBG);

  // Add form elements
  const modalForm = modalAddBookCntr.querySelector('form');
  modalForm.appendChild(formItem('Title:','title','text',true));
  modalForm.appendChild(formItem('Author:','author','text',true));
  modalForm.appendChild(formItem('Page count:','pageCount','number',true));
  modalForm.appendChild(formItem('Have read:','isRead','checkbox',true));
  modalForm.appendChild(formItem('Rating:','rating','range',true));
  const modalFormSubmitButton = formItem('','Add book!','submit',false);
  // TODO: add click eventlistener
  modalForm.appendChild(modalFormSubmitButton);
}

// Element generators
function bookElement(book) {
  const bookElm = document.createElement('div');

  // Once the model is more finalized, I probably won't be able to just do this
  // (eg, 'rating' will require a very different approach)
  Object.getOwnPropertyNames(book).forEach((prop) => {
    bookElm.appendChild(bookPropertyElement(book, prop));
  });

  bookElm.classList.add('book');
  bookElm.classList.add('card');
  bookElm.setAttribute('data-booktitle',book.title);

  return bookElm;
}

function bookPropertyElement(book, property) {
  const bookPropertyElm = document.createElement('div');
  bookPropertyElm.textContent = book[property];
  bookPropertyElm.classList.add('book-prop');
  bookPropertyElm.classList.add(`book-${property}`);

  return bookPropertyElm;
}

// TODO: Add to Modal a close window button
function formItem(label, name, type, isRequired) {
  const newFormItem = document.createElement('div');
  newFormItem.classList.add('form-item');

  const formLabel = document.createElement('label');
  formLabel.textContent = label;
  formLabel.setAttribute('for', name);

  const formInput = document.createElement('input');
  formInput.setAttribute('type', type);
  formInput.setAttribute('name', name);
  formInput.setAttribute('id', `form-${name}`);
  formInput.required = isRequired;

  if (type === 'submit') {
    formInput.value=name;
  }

  newFormItem.appendChild(formLabel);
  newFormItem.appendChild(formInput);

  return newFormItem;
}

// I don't want to be calling DOM methods directly from 'normal' JS,
// especially because it will probably require more logic than this
function addLibraryToDOM() {
  library.forEach(book => bookCntr.appendChild(bookElement(book)));
}

function addBookToDom(book) {
  bookCntr.appendChild(bookElement(book));
}

// Add Event Listeners
// TODO: BUTTONS SHOULD HAVE EITHER A CLASS OR DATA ATTRIBUTE THAT DEFINES THEIR
// TODO: ...CONTEXT. This way, I can check a global context var, and only trigger
// TODO: their click event if the global context matches *their* context
// (eg, if I'm in the "add book" modal context, buttons in the "home" context shouldn't be clickable)
document.querySelector('.add-book-btn').addEventListener('click', () => {
  modalAddBookCntr.classList.toggle('hidden');
});

initModalAddBook();