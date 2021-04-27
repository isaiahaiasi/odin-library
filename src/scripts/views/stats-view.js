function getBooksReadCount(booksArray) {
  return booksArray.reduce((sum, book) => (book.isRead ? sum + 1 : sum), 0);
}
function getPagesReadCount(booksArray) {
  return booksArray.reduce(
    (sum, book) => (book.isRead ? sum + +book.pageCount : sum),
    0
  );
}

export default function statsView(library) {
  const bookStats = {
    totalBooks: document.querySelector("#total-books"),
    booksRead: document.querySelector("#books-read"),
    pagesRead: document.querySelector("#pages-read"),
  };
  bookStats.totalBooks.textContent = library.length;
  bookStats.booksRead.textContent = getBooksReadCount(library);
  bookStats.pagesRead.textContent = getPagesReadCount(library);
}
