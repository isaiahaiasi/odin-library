import { getCloseButton } from "./dom-helpers";
import validateForm from "./form-validation";

export default function modalView(addBook) {
  const modalAddBookCntr = document.querySelector("#modal-container-addbook");

  const inputs = modalAddBookCntr.querySelectorAll("input");

  const submitButton = modalAddBookCntr
    .querySelector("form")
    .querySelector("button");

  const closeModalBtn = getCloseButton(handleCloseModal);
  modalAddBookCntr.querySelector(".modal").appendChild(closeModalBtn);

  submitButton.addEventListener("click", handleSubmitForm);

  function handleCloseModal() {
    modalAddBookCntr.classList.add("hidden");
    inputs.forEach((input) => {
      input.value = "";
      input.checked = false;
    });
  }

  // TODO: refactor to use event object!!
  function handleSubmitForm() {
    const validationResponse = validateForm(modalAddBookCntr);

    // need to use *strict* equality, because if false I return an error obj
    // (sorry)
    if (validationResponse !== true) {
      validationFailDisplay(
        validationResponse.input,
        validationResponse.message
      );
      return;
    }

    const bookArgs = {};
    modalAddBookCntr.querySelectorAll("input").forEach((input) => {
      bookArgs[input.name] =
        input.type === "checkbox" ? input.checked : input.value;
    });

    addBook(bookArgs);

    handleCloseModal();
  }

  function validationFailDisplay(element, msg) {
    const decay = 1; // error message timeout, in seconds

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

  return modalAddBookCntr;
}
