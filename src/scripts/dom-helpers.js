export function makeSwitch(label, name, isChecked, onChange) {
  const inputElm = document.createElement("label");
  inputElm.classList.add("switch");

  const textElm = document.createElement("span");
  textElm.textContent = label;
  textElm.classList.add("switch-label");
  inputElm.appendChild(textElm);

  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.name = name;
  inputCheckbox.checked = isChecked;
  inputCheckbox.addEventListener("change", () =>
    onChange(inputCheckbox.checked)
  );

  inputElm.appendChild(inputCheckbox);

  const inputSpanElm = document.createElement("span");
  inputSpanElm.classList.add("switch-span");
  inputElm.appendChild(inputSpanElm);

  return inputElm;
}

// TODO: don't use div as button
// TODO: pass class in as param
// TODO: once above are fixed, give generic name
export function getCloseButton(onClick) {
  const closeBtn = document.createElement("div");
  closeBtn.classList.add("close-btn");
  closeBtn.addEventListener("click", onClick);
  return closeBtn;
}
