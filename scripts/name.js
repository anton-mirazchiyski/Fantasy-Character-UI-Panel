const panelListElement = document.querySelector(".panel > ul");

function chooseName() {
    panelListElement.style.display = "none";
}

const chooseNameButtonElement = document.querySelector(".choose-name-btn");
chooseNameButtonElement.addEventListener("click", chooseName);
