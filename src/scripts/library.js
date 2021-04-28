export default function Library(onUpdate) {
  let books = [];

  function addBooks(...newBooks) {
    books = [...books, ...newBooks];
    onUpdate();
  }

  function deleteBook(id) {
    books = books.filter((book) => book.id !== id);
    onUpdate();
  }

  function setIsBookRead(id, bool) {
    const book = books.find((b) => b.id === id);
    if (!book) {
      throw new Error(`could not find book with id ${id} in library!`);
    }

    book.setIsRead(bool);

    // unfortunately, I've tied re-render to save...
    // which means I can't get an animation for this...
    onUpdate();
  }

  onUpdate();

  return {
    get books() {
      return books;
    },
    addBooks,
    deleteBook,
    setIsBookRead,
  };
}
