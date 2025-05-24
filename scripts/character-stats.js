const chooseStatButtonElement = document.querySelector(".choose-mainStat-btn");
const statsSectionElement = document.querySelector(".stats-section");
const statButtons = document.querySelectorAll(".stat-btn");


function chooseMainStat() {
    panelListElement.style.display = "none";
    statsSectionElement.style.display = "flex";

    statButtons.forEach(statButton => {
        statButton.addEventListener("click", (e) => {
            const stat = e.target;
            chooseStatButtonElement.textContent = stat.textContent;
            stat.classList.add("chosen-stat");

            panelListElement.style.display = "flex";
            statsSectionElement.style.display = "none";
            showPanelDivElement.style.display = "none";
        })
    });

    statButtons.forEach(statButton => {
        if (statButton.classList.contains("chosen-stat") && statButton.textContent != chooseStatButtonElement.textContent) {
            statButton.classList.remove("chosen-stat");
            }
        });
}

chooseStatButtonElement.addEventListener("click", chooseMainStat);
