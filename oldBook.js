// The initial exercise making an object Constructor, prior to introducing
// the concept of Prototypes, Object.create(), classes, etc.

library = [];

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