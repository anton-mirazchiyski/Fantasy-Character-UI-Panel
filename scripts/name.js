const panelListElement = document.querySelector(".panel > ul");
const chooseNameButtonElement = document.querySelector(".choose-name-btn");


function chooseName() {
    panelListElement.style.display = "none";
    const formsSectionElement = document.querySelector(".forms");
    const nameInputElement = document.querySelector(".name-form input");
    const nameFormElement = document.querySelector(".name-form");
    formsSectionElement.style.display = "block";

    nameFormElement.addEventListener("submit", (e) => {
        e.preventDefault();
        chooseNameButtonElement.textContent = nameInputElement.value;
        panelListElement.style.display = "flex";
        formsSectionElement.style.display = "none";
    }, {once: true});
}

chooseNameButtonElement.addEventListener("click", chooseName);
