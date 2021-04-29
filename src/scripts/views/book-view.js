import { getCloseButton, makeSwitch } from "../dom-helpers";

const bookView = (book, setBook, onDeleteBook) => {
  const getBookPropertyElement = (property) => {
    const bookPropertyElement = document.createElement("div");
    bookPropertyElement.textContent = book[property];
    bookPropertyElement.classList.add("book-prop");
    bookPropertyElement.classList.add(`book-${property}`);

    return bookPropertyElement;
  };

  const updateIsReadStyle = (isRead) => {
    if (isRead) {
      bookElement.classList.add("semi-transparent");
    } else {
      bookElement.classList.remove("semi-transparent");
    }
  };

  //* Container
  const bookElement = document.createElement("div");
  bookElement.classList.add("book", "card");
  updateIsReadStyle(book.isRead);

  //* Property elements
  const title = getBookPropertyElement("title");
  const author = getBookPropertyElement("author");
  const pageCount = getBookPropertyElement("pageCount");
  const isRead = makeSwitch(
    "is read:",
    "isRead",
    book.isRead,
    (switchValue) => {
      updateIsReadStyle(switchValue);
      setBook({ id: book.id, isRead: switchValue });
    }
  );

  //* Delete button
  const deleteBtn = getCloseButton(() => {
    onDeleteBook(book.id);
  });

  deleteBtn.classList.add("hidden");
  ["mouseenter", "mouseleave"].forEach((eventType) => {
    bookElement.addEventListener(eventType, () => {
      deleteBtn.classList.toggle("hidden");
    });
  });

  //* Add everything together
  [title, author, pageCount, isRead, deleteBtn].forEach((element) => {
    bookElement.appendChild(element);
  });

  return bookElement;
};

export default bookView;
