// TODO: fix this mess
// - should be passing the event from the form submission,
// which has the data from all the inputs
// - should return some sort of object which contains:
//   - the input that failed to validate
//   - the error message
export default function validateForm(form, library) {
  const inputs = form.querySelectorAll("input[required]");

  const emptyInput = [...inputs].find((input) => input.value === "");

  if (emptyInput) {
    return {
      valid: false,
      message: "Please fill out this field!",
      input: emptyInput,
    };
  }

  // TODO: WELP. DON'T LIKE THIS.
  for (let i = 0; i < inputs.length; i++) {
    if (
      inputs[i].name === "id" &&
      library.some((book) => book.id === inputs[i].value)
    ) {
      return {
        valid: false,
        input: inputs[i],
        message: "id must be unique!",
      };
    }
    if (inputs[i].type === "number" && inputs[i].value < 1) {
      return {
        valid: false,
        input: inputs[i],
        message: "Page count can't be negative!",
      };
    }
  }

  return true;
}
