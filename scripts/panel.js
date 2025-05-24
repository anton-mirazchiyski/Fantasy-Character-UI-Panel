const panelListElement = document.querySelector(".panel > ul");

const showPanelDivElement = document.querySelector(".show-panel-div");
const showPanelButtonElement = document.querySelector(".show-panel-btn");

const panelButtons = document.querySelectorAll(".panel-btn");
const characterSections = document.querySelectorAll("section.character-section");


panelButtons.forEach(panelButton => {
    panelButton.addEventListener("click", (e) => {
        showPanelDivElement.style.display = "flex";
    });
});

showPanelButtonElement.addEventListener("click", (e) => {
    characterSections.forEach(characterSection => {
        characterSection.style.display = "none";
    });

    showPanelDivElement.style.display = "none";
    panelListElement.style.display = "flex";
});
