// I'm not sure if it would be better to use a map or an array
// map: instant access if I want a specific book, & quick to remove
// array: simpler, ?...
const library = new Map();

function Book(title, author, pageCount, isRead, rating) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.isRead = isRead;
  this.rating = rating;
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
  newProps.push(prompt('What is it\'s rating?'));
  return newProps;
}

// * DOM
const bookContainer = document.querySelector('.library');

// Add Event Listeners
document.querySelector('.add-book').addEventListener('click', addBookToLibrary);

// Element generators
function bookElement(book) {
  const bookElm = document.createElement('div');

  // Once the model is more finalized, I probably won't be able to just do this
  // (eg, 'rating' will require a very different approach)
  Object.getOwnPropertyNames(book).forEach((prop) => {
    bookElm.appendChild(bookPropertyElement(book, prop));
  });

  bookElm.classList.add('book');
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

// I don't want to be calling DOM methods directly from 'normal' JS,
// especially because it will probably require more logic than this
function addLibraryToDOM() {
  library.forEach(book => bookContainer.appendChild(bookElement(book)));
}

function addBookToDom(book) {
  bookContainer.appendChild(bookElement(book));
}