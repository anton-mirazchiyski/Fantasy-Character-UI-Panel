const chooseRaceButtonElement = document.querySelector(".choose-race-btn");
const raceSectionElement = document.querySelector(".race-section");

const raceButtonElement = document.querySelector(".race-btn");
const chooseRaceElement = document.querySelector(".race-input-btn");

const nextRaceElement = document.querySelector("span.right-arrow");
const previousRaceElement = document.querySelector("span.left-arrow");


function chooseRace() {
    panelListElement.style.display = "none";
    raceSectionElement.style.display = "flex"

    const characterRaces = ["Human", "Nord", "Orc", "High Elf", "Dwarf", "Halfling"];
    let raceIndex = -1;

    nextRaceElement.addEventListener("click", (e) => {
        raceIndex++;
        if (raceIndex == characterRaces.length) {
            raceIndex = 0;
        }
        let currentRace = characterRaces[raceIndex];
        raceButtonElement.textContent = currentRace;
    });

    previousRaceElement.addEventListener("click", (e) => {
        raceIndex--;
        if (raceIndex < 0) {
            raceIndex = characterRaces.length - 1;
        }
        let currentRace = characterRaces[raceIndex];
        raceButtonElement.textContent = currentRace;
    });
}

chooseRaceButtonElement.addEventListener("click", chooseRace);
