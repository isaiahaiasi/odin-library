// TODO: create a library object, which has an addBooks([]) method

export default function Library() {
  const books = [];
  const renderListeners = [];

  // TODO
  function addBook(book) {
    books.push(book);
  }

  // TODO
  function deleteBook(book) {
    books.splice(
      books.findIndex((b) => b.title === book.title),
      1
    );
    render();
  }

  function addRenderListener() {
    // TODO
  }

  function render() {
    // TODO TODO TODO
    // clear all the dynamic content & rerenders it
  }

  return { addBook, deleteBook, addRenderListener };
}
