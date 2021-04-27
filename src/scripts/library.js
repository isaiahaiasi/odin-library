// TODO: refactor styles into a "preload" js bundle
import "../styles/reset.css";
import "../styles/style.css";

import Book from "./book";

import { getCloseButton } from "./dom-helpers";
import bookView from "./views/book-view";

// TODO: refactor so that there's a true "RENDER" function
// which clears all the dynamic content & rerenders it
// TODO:
// TODO: create a library object, which has an addBooks([]) method
// TODO: create a libraryRenderer function, which can take a Library &
// generate DOM elements for it
const library = [];

const bookCntr = document.querySelector(".library");
const modalAddBookCntr = document.querySelector("#modal-container-addbook");
const bookStats = {
  totalBooks: document.querySelector("#total-books"),
  booksRead: document.querySelector("#books-read"),
  pagesRead: document.querySelector("#pages-read"),
};

// * Element generators
function initModalAddBook() {
  // ADD FORM ELEMENTS
  modalAddBookCntr.querySelector(".modal").appendChild(
    getCloseButton(() => {
      modalAddBookCntr.classList.add("hidden");
      Array.from(modalAddBookCntr.querySelectorAll("input")).forEach(
        (input) => {
          input.value = "";
          input.checked = false;
        }
      );
    })
  );

  const modalFormBtn = modalAddBookCntr
    .querySelector("form")
    .querySelector("button");

  modalFormBtn.addEventListener("click", () => {
    if (!validateForm(modalAddBookCntr)) {
      return;
    }

    const bookArgs = [];
    Array.from(modalAddBookCntr.querySelectorAll("input")).forEach((input) => {
      bookArgs.push(input.type === "checkbox" ? input.checked : input.value);
      input.value = "";
      input.checked = false;
    });

    const book = new Book(...bookArgs);
    library.push(book);
    bookCntr.appendChild(bookView(book));
    modalAddBookCntr.classList.toggle("hidden");
    updateLibrary();
  });
}

const deleteBookFunction = (book) => {
  library.splice(
    library.findIndex((b) => b.title === book.title),
    1
  );
  bookCntr.removeChild(bookElm);
  updateLibrary();
};

// * FORM VALIDATION
function validateForm(formContainer) {
  const inputs = formContainer.querySelectorAll("input[required]");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      console.log(`validation failed on input ${inputs[i].name}`);
      validationFailDisplay(inputs[i], "Please fill out this field!", 1);
      return false;
    }

    if (
      inputs[i].name === "title" &&
      library.some((book) => book.title === inputs[i].value)
    ) {
      console.log(
        `validation failed on input ${inputs[i].name} (Can't have multiple books with the same title!)`
      );
      validationFailDisplay(inputs[i], "Title must be unique!", 1);
      return false;
    }
    if (inputs[i].type === "number" && inputs[i].value < 1) {
      console.log(
        `validation failed on input ${inputs[i].name} (you can't have negative pages, silly!)`
      );
      validationFailDisplay(inputs[i], "Page count can't be negative!", 1);
      return false;
    }
  }

  return true;
}

function validationFailDisplay(element, msg, decay) {
  element.classList.remove("validation-failed");
  window.clearTimeout(timeout);
  element.classList.add("validation-failed");
  element.style.animationDuration = `${decay}s`;

  const popup = document.createElement("div");
  popup.classList.add("card");
  popup.classList.add("form-validation-error");
  popup.textContent = msg;
  element.parentElement.appendChild(popup);
  window.setTimeout(timeout, decay * 1000);

  function timeout() {
    element.classList.remove("validation-failed");
    popup.remove();
  }
}

// * LIBRARY STATS
function updateFooterData() {
  bookStats.totalBooks.textContent = library.length;
  bookStats.booksRead.textContent = getBooksRead(library);
  bookStats.pagesRead.textContent = getPagesRead(library);
}

function getBooksRead(libArray) {
  return libArray.reduce((sum, book) => (book.isRead ? sum + 1 : sum), 0);
}
function getPagesRead(libArray) {
  return libArray.reduce(
    (sum, book) => (book.isRead ? sum + +book.pageCount : sum),
    0
  );
}

// * LocalStorage Handling
function saveLibrary() {
  const libJSON = JSON.stringify(library);
  window.localStorage.setItem("libraryRecord", libJSON);
}

function loadLibrary() {
  const libraryRecord = window.localStorage.getItem("libraryRecord");

  // eslint-disable-next-line eqeqeq
  if (!libraryRecord || libraryRecord == {}) {
    loadDemoBooks();
  } else {
    JSON.parse(libraryRecord).forEach((book) => {
      const fullBook = new Book(
        book.title,
        book.author,
        book.pageCount,
        book.isRead
      );
      library.push(fullBook);
    });
    library.forEach((book) => bookCntr.appendChild(bookView(book)));
  }
}

function loadDemoBooks() {
  const demoBooks = [
    new Book("Learning JavaScript Design Patterns", "Addy Osmani", 246, false),
    new Book(
      "Introduction to Algorithms",
      "Thomas H. Cormen, et al.",
      1312,
      true
    ),
    new Book(
      "The Pragmatic Programmer",
      "Andrew Hunt, Dave Thomas",
      320,
      false
    ),
    new Book("Clean Code", "Robert Martin", 400, false),
    new Book("The DevOps Handbook", "Gene Kim, et al.", 480, false),
    new Book("Grokking Algorithms", "Aditya Bhargava", 256, true),
  ];
  demoBooks.forEach((book) => library.push(book));
  library.forEach((book) => bookCntr.appendChild(bookView(book)));
}

function updateLibrary() {
  updateFooterData();
  saveLibrary();
  console.log("library updated");
}

export default function initializeLibrary() {
  document.querySelector(".add-book-btn").addEventListener("click", () => {
    modalAddBookCntr.classList.toggle("hidden");
  });

  initModalAddBook();
  loadLibrary();
  updateFooterData();
}

initializeLibrary();
