const btnDarkMode = document.querySelector(".darkMode");
const btnLightMode = document.querySelector(".lightMode");

btnDarkMode.addEventListener("click", darkMode);
btnLightMode.addEventListener("click", lightMode);

function darkMode() {
  btnDarkMode.classList.add("hide");
  btnLightMode.classList.remove("hide");
  document.querySelector("body").classList.add("bg-darkMode");
  document.querySelector(".card").classList.add("card-darkMode");
  changeTitleDarkMode();
  document.querySelector(".modal").classList.add("card-darkMode");
  changeTitleInputDarkMode();
}

function lightMode() {
  btnLightMode.classList.add("hide");
  btnDarkMode.classList.remove("hide");
  document.querySelector("body").classList.remove("bg-darkMode");
  document.querySelector(".card").classList.remove("card-darkMode");
  document.querySelector(".modal").classList.remove("card-darkMode");
  changeTitleLightMode();
  changeTitleInputLightMode();
}

function changeTitleDarkMode() {
  const title = document.querySelectorAll(".title");
  const titleModal = document.querySelectorAll(".title span");

  for (let i = 0; i < title.length; i++) {
    title[i].classList.add("title-darkMode");
  }

  for (let i = 0; i < titleModal.length; i++) {
    titleModal[i].classList.add("title-darkMode");
  }
}

function changeTitleLightMode() {
  const title = document.querySelectorAll(".title");
  const titleModal = document.querySelectorAll(".title span");

  for (let i = 0; i < title.length; i++) {
    title[i].classList.remove("title-darkMode");
  }

  for (let i = 0; i < titleModal.length; i++) {
    titleModal[i].classList.remove("title-darkMode");
  }
}

function changeTitleInputDarkMode() {
  const titleInput = document.querySelectorAll("form label");
  for (let i = 0; i < titleInput.length; i++) {
    titleInput[i].classList.add("title-darkMode");
  }
}

function changeTitleInputLightMode() {
  const titleInput = document.querySelectorAll("form label");
  for (let i = 0; i < titleInput.length; i++) {
    titleInput[i].classList.remove("title-darkMode");
  }
}
