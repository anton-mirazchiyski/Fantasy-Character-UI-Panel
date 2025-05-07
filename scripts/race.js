const chooseRaceButtonElement = document.querySelector(".choose-race-btn");
const raceSectionElement = document.querySelector(".race-section");

const raceButtonElement = document.querySelector(".race-btn");
const chooseRaceElement = document.querySelector(".race-input-btn");

const nextRaceElement = document.querySelector("span.right-arrow");
const previousRaceElement = document.querySelector("span.left-arrow");


function chooseRace() {
    panelListElement.style.display = "none";
    raceSectionElement.style.display = "flex"

    const characterRaces = ["Human", "Nord", "Orc", "Dwarf", "Halfling"];
    let raceIndex = 0;

    nextRaceElement.addEventListener("click", (e) => {
        let currentRace = characterRaces[raceIndex];
        raceButtonElement.textContent = currentRace;
        raceIndex++;
        if (raceIndex == characterRaces.length) {
            raceIndex = 0;
        }
    });

    previousRaceElement.addEventListener("click", (e) => {
        raceIndex--;
        if (raceIndex == -1) {
            raceIndex = characterRaces.length - 1;
        }
        let currentRace = characterRaces[raceIndex];
        raceButtonElement.textContent = currentRace;
    });
}

chooseRaceButtonElement.addEventListener("click", chooseRace);
