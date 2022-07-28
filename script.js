const form = document.querySelector(".form");
const formGroup = document.querySelector(".form__group");
const input = document.querySelector(".form__input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

input.addEventListener("input", () => {
  formGroup.removeAttribute("data-error");
});

function checkInput() {
  let reg = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  if (reg.test(input.value)) {
    formGroup.removeAttribute("data-error");
  } else {
    formGroup.setAttribute(
      "data-error",
      "Please provide a valid email address."
    );
  }
}
