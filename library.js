const library = [];

function Book(title, author, pageCount, isRead, rating) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.isRead = isRead;
  this.rating = rating;

  this.info = function() {
    return `${title} by ${author}, ${pageCount} pages, ` +
        `${isRead ? 'read':'not read yet'}, rating: ${rating} stars.`;
  }
}

function addBookToLibrary() {
  const constructorInputs = [];
  
  // Take input for each constructor field & push to inputs array
  
  if (Book.length === constructorInputs.length) {
    libary.add(new Book(...constructorInputs));
    return true;
  } else {
    // Throw an error
    return false;
  }
}