const chooseNameButtonElement = document.querySelector(".choose-name-btn");
const randomNameButtonElement = document.querySelector("button.name-randomization-btn");

const formsSectionElement = document.querySelector(".name-section");
const nameInputElement = document.querySelector(".name-form input");
const nameFormElement = document.querySelector(".name-form");

const nameErrorMessageParagraph = document.querySelector(".name-error-message");


function chooseName() {
    panelListElement.style.display = "none";
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
        showPanelDivElement.style.display = "none";
    });
}

function generateRandomName() {
    const prefixes = ["Mord", "Tru", "Fold", "Fire", "Grol", "Kell", "Ive"];
    const suffixes = ["whin", "grim", "rend", "stran", "pren", "dan"];

    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    const name = randomPrefix + randomSuffix;
    nameInputElement.value = name;
}

chooseNameButtonElement.addEventListener("click", chooseName);
randomNameButtonElement.addEventListener("click", generateRandomName);

window.addEventListener("load", () => {
    nameInputElement.value = "";
});
