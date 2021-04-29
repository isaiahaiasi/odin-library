// TODO: refactor styles into a "preload" js bundle
import "../styles/reset.css";
import "../styles/style.css";

// import { load, save } from "./handle-local-storage";
import modalView from "./modal";
import LibraryView from "./views/library-view";
import { clearChildren } from "./dom-helpers";
import { authHandler, firestoreHandler } from "./firebase-init";

const renderListeners = [];

function render() {
  renderListeners.forEach((listener) => listener());
}

// define function for adding render listeners
function addRenderListener(listener) {
  renderListeners.push(listener);
}

function renderView(view, container) {
  clearChildren(container);
  container.appendChild(view);
}

// pretty sure I actually want to replace Library with Firestore entirely
// firebaseHandler just needs to be passed onAdd/onRemove/onSet
const onAuthStateChange = authHandler();
const db = firestoreHandler(onAuthStateChange);

async function renderLibrary() {
  const books = (await db.getBooks()) ?? [];
  console.log("books", books);
  const libraryContainer = document.querySelector(".library-container");
  const libraryView = LibraryView(books, db.setBook, db.removeBook);
  renderView(libraryView, libraryContainer);
  // save(books);
}

addRenderListener(renderLibrary);

// * Initialize modal "Add Book" form
const addBookModal = modalView(db.addBook);

document.querySelector(".add-book-btn").addEventListener("click", () => {
  addBookModal.classList.toggle("hidden");
});

// library should re-render when the database changes
db.onDatabaseUpdate(render);

//! TEMP "RE-RENDER" BUTTON
const renderBtn = document.createElement("button");
renderBtn.addEventListener("click", render);
renderBtn.textContent = "re-render";
document.querySelector("main").appendChild(renderBtn);

// TODO: init stats renderer
