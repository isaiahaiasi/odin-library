import bookView from "./book-view";

// TODO: not sure if I should generate or query for the container
const libraryView = (library) => {
  const bookHeadingsHtml = `
      <div class='book-prop'>Title</div>
      <div class='book-prop'>Author</div>
      <div class='book-prop'>Page count</div>
      <div class='book-prop'>Read status</div>
  `;
  const bookHeadings = document.createElement("div");
  bookHeadings.classList.add("card", "book", "library-header");
  bookHeadings.innerHTML = bookHeadingsHtml;

  const libraryElement = document.querySelector(".library");

  libraryElement.appendChild(bookHeadings);
  library.forEach((book) => {
    libraryElement.appendChild(
      bookView(book, library.setBookIsRead, library.handleDeleteBook)
    );
  });
};

export default libraryView;
