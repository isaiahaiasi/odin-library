// I'm not sure if it would be better to use a map or an array
// map: instant access if I want a specific book, & quick to remove
// array: simpler, ?...
const library = new Map();

function Book(title, author) {
  this.title = title;
  this.author = author;
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
    return true;
  } else {
    // Throw an error
    return false;
  }
}

function getNewBookPrompt() {
  const title = prompt('What is the book\'s title?');
  const author = prompt('Who is the book\'s author?');
  return [title, author];
}

// * DOM
bookContainer = document.querySelector('.library');

// Add Event Listeners

document.querySelector('.add-book').addEventListener('click', addBookToLibrary);

// Book Element generator
function bookElement(book) {
  const bookElement = document.createElement('div');
  
  const titleElement = document.createElement('div');
  titleElement.textContent = `Title: ${book.title}`;
  bookElement.appendChild(titleElement);
  const authorElement = document.createElement('div');
  authorElement.textContent = `Author: ${book.author}`;
  bookElement.appendChild(authorElement);

  bookElement.classList.add('book');

  return bookElement;
}

function addLibraryToDOM() {
  library.forEach(book => bookContainer.appendChild(bookElement(book)));
}