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

// * === DOM === *
const bookCntr = document.querySelector('.library');
const modalAddBookCntr = document.querySelector('#modal-container-addbook');

// * Element generators
function initModalAddBook() {
  // Add bg
  // const modalBG = document.createElement('div');
  // modalBG.classList.add('modal-bg');
  // modalAddBookCntr.appendChild(modalBG);

  // ADD FORM ELEMENTS
  modalAddBookCntr.querySelector('.modal').appendChild(closeButton(() => {
    modalAddBookCntr.classList.toggle('hidden');
  }));

  const modalForm = modalAddBookCntr.querySelector('form');

  const formItems = [];
  formItems.push(formItem('Title:','title','text',true));
  formItems.push(formItem('Author:','author','text',true));
  formItems.push(formItem('Page count:','pageCount','number',true));
  formItems.push(formItem('Have read:','isRead','checkbox',true));

  formItems.forEach(item => { modalForm.appendChild(item)});
  
  const modalFormSubmitButton = formItem('','Add book!','button',false);
  modalFormSubmitButton.addEventListener('click', () => {
    const bookArgs = [];
    formItems.forEach(item => {
      const itemInputElm = item.querySelector('input');
      bookArgs.push(itemInputElm.type === 'checkbox' ?
        itemInputElm.checked :
        itemInputElm.value
      );
      itemInputElm.value = '';
      itemInputElm.checked = false;
    });
    const book = new Book(...bookArgs);
    library.set(book.title, book);
    addBookToDom(book);
    modalAddBookCntr.classList.toggle('hidden');
  });

  modalForm.appendChild(modalFormSubmitButton);
}

function bookElement(book) {
  const bookElm = document.createElement('div');

  const bookTitle = bookPropertyElement(book, 'title');
  const bookAuthor = bookPropertyElement(book, 'author');
  const bookPageCount = bookPropertyElement(book, 'pageCount');
  const bookIsRead = bookPropertyElement(book, 'isRead');

  const bookPropElms = [bookTitle, bookAuthor, bookPageCount, bookIsRead];
  bookPropElms.forEach(bookPropElm => {
    bookElm.appendChild(bookPropElm);
  });

  const deleteBookBtn = closeButton(() => {
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

  newFormItem.appendChild(formLabel);
  newFormItem.appendChild(formInput);

  return newFormItem;
}

function closeButton(func) {
  const closeBtn = document.createElement('div');
  closeBtn.classList.add('close-btn');
  closeBtn.addEventListener('click', func)
  return closeBtn;
}

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
addLibraryToDOM();