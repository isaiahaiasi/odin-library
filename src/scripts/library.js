function callAll(callbacks, ...args) {
  callbacks.forEach((callback) => callback(...args));
}

export default function Library(onUpdate) {
  let books = [];
  const listeners = {
    bookAdded: [],
    bookRemoved: [],
  };

  function addBook(book) {
    books.push(book);
    callAll(listeners.bookAdded, book);

    onUpdate();
  }

  function deleteBook(id) {
    books = books.filter((book) => book.id !== id);
    callAll(listeners.bookRemoved, id);
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

  // takes a sub, pubs all subs when
  function onAddBook(listener) {
    listeners.bookAdded.push(listener);
  }

  function onDeleteBook(listener) {
    listeners.bookRemoved.push(listener);
  }

  onUpdate();

  return {
    get books() {
      return books;
    },
    addBook,
    deleteBook,
    setIsBookRead,
    onAddBook,
    onDeleteBook,
  };
}
