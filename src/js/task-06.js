const input = document.querySelector("#validation-input");
const validLength = input.getAttribute("data-length");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputValue = event.target.value;

  if (inputValue.length === Number(validLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
