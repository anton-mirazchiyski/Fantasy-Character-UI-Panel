const panelListElement = document.querySelector(".panel > ul");
const chooseNameButtonElement = document.querySelector(".choose-name-btn");

const nameErrorMessageParagraph = document.querySelector(".name-error-message");


function chooseName() {
    panelListElement.style.display = "none";
    const formsSectionElement = document.querySelector(".forms");
    const nameInputElement = document.querySelector(".name-form input");
    const nameFormElement = document.querySelector(".name-form");
    formsSectionElement.style.display = "block";

    nameFormElement.addEventListener("submit", (e) => {
        e.preventDefault();
        const chosenName = nameInputElement.value;
        if (!/^[A-Z][a-z]+$/.test(chosenName)) {
            nameErrorMessageParagraph.style.display = "block";
            return;
        }

        chooseNameButtonElement.textContent = chosenName;
        panelListElement.style.display = "flex";
        formsSectionElement.style.display = "none";
        nameErrorMessageParagraph.style.display = "none";
    });
}

chooseNameButtonElement.addEventListener("click", chooseName);
