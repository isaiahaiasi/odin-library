// TODO: refactor styles into a "preload" js bundle
import "../styles/reset.css";
import "../styles/style.css";

document.querySelector(".add-book-btn").addEventListener("click", () => {
  modalAddBookCntr.classList.toggle("hidden");
});

initModalAddBook();
loadLibrary();
updateFooterData();
