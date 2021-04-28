import bookView from "./book-view";

// TODO: not sure if I should generate or query for the container
const LibraryView = (library) => {
  // * Define html
  const bookHeadingsHtml = `
      <div class='book-prop'>Title</div>
      <div class='book-prop'>Author</div>
      <div class='book-prop'>Page count</div>
      <div class='book-prop'>Read status</div>
  `;
  const bookHeadings = document.createElement("div");
  bookHeadings.classList.add("card", "book", "library-header");
  bookHeadings.innerHTML = bookHeadingsHtml;

  const libraryElement = document.createElement("div");
  libraryElement.classList.add("library");

  libraryElement.appendChild(bookHeadings);

  library.books.forEach((book) => {
    libraryElement.appendChild(
      bookView(book, library.setIsBookRead, library.deleteBook)
    );
  });

  return libraryElement;
};

export default LibraryView;
