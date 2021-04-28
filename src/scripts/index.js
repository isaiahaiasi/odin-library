// TODO: refactor styles into a "preload" js bundle
import "../styles/reset.css";
import "../styles/style.css";

import { load, save } from "./handle-local-storage";
import Library from "./library";
import modalView from "./modal";
import LibraryView from "./views/library-view";
import { clearChildren } from "./dom-helpers";

const renderListeners = [];

// UPDATE RENDER YADDA YADDA
function render() {
  renderListeners.forEach((listener) => listener());
}

// define function for adding render listeners
const addRenderListener = (listener) => {
  renderListeners.push(listener);
};

const renderView = (view, container) => {
  clearChildren(container);
  container.appendChild(view);
};

// * Initialize library & add a libraryView renderer to the renderListeners
// ? Library probably shouldn't be responsible for render,
// but I'm loathe to add a pubsub system
const library = Library(render);
library.addBooks(...load());

const onLibraryUpdate = () => {
  const libraryContainer = document.querySelector(".library-container");
  const libraryView = LibraryView(library);
  renderView(libraryView, libraryContainer);
  save(library.books);
};

addRenderListener(onLibraryUpdate);

// * Initialize modal "Add Book" form
const addBookModal = modalView(library);

document.querySelector(".add-book-btn").addEventListener("click", () => {
  addBookModal.classList.toggle("hidden");
});

render();

// TODO: init firebase
// TODO: figure out who should have the responsibility of updating firebase...

// TODO: init stats renderer
