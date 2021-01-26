// Using a map instead of an array b/c main use will be getting a book by key
// (book dom element finding its entry in map to delete, toggle isRead, etc)
const library = new Map();

function Book(title, author, pageCount, isRead) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.isRead = isRead;
}
Book.prototype.info = function() {
  return `${this.title} by ${this.author}`;
};
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
  // Add bg
  const modalBG = document.createElement('div');
  modalBG.classList.add('modal-bg');
  modalAddBookCntr.appendChild(modalBG);

  // ADD FORM ELEMENTS
  modalAddBookCntr.querySelector('.modal').appendChild(getCloseButton(() => {
    modalAddBookCntr.classList.toggle('hidden');
  }));

  const modalForm = modalAddBookCntr.querySelector('form');

  const formItems = [];
  formItems.push(getFormItem('Title:','title','text',true));
  formItems.push(getFormItem('Author:','author','text',true));
  formItems.push(getFormItem('Page count:','pageCount','number',true));

  const formItemSlider = document.createElement('div');
  formItemSlider.classList.add('form-item');
  formItemSlider.appendChild(getSwitch('Have read:','isRead', false));
  formItems.push(formItemSlider);

  formItems.forEach(item => { modalForm.appendChild(item)});

  const modalFormSubmitButton = document.createElement('button');
  modalFormSubmitButton.type = 'button';
  modalFormSubmitButton.textContent += 'Add Book';
  
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

function getFormItem(label, name, type, isRequired) {
  const newFormItem = document.createElement('div');
  newFormItem.classList.add('form-item');

  const formLabel = document.createElement('label');
  formLabel.textContent = label;
  formLabel.setAttribute('for', name);

  const formInput = document.createElement('input');
  formInput.setAttribute('type', type);
  formInput.setAttribute('name', name);
  // formInput.setAttribute('id', `form-${name}`);
  formInput.required = isRequired;

  newFormItem.appendChild(formLabel);
  newFormItem.appendChild(formInput);

  return newFormItem;
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