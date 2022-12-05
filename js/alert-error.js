export const AlertError = {
  element1: document.querySelector(".alert-error-only-numbers"),
  element2: document.querySelector(".alert-error-empty-field"),
  open1() {
    AlertError.element1.classList.add("open");
  },
  open2() {
    AlertError.element2.classList.add("open");
  },
  close() {
    AlertError.element1.classList.remove("open");
    AlertError.element2.classList.remove("open");
  },
};
