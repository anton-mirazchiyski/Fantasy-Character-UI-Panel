const chooseWeaponButtonElement = document.querySelector(".choose-weapon-btn");
const weaponsSectionElement = document.querySelector(".weapon-section");
const weaponTypes = document.querySelectorAll(".weapon-type");


function chooseWeapon() {
    panelListElement.style.display = "none";
    weaponsSectionElement.style.display = "flex";
    
    for (let weaponType of weaponTypes) {
        weaponType.addEventListener("click", (e) => {
            const weapon = e.target;
            chooseWeaponButtonElement.textContent = weapon.textContent;
            weapon.classList.add("chosen-weapon");
            
            panelListElement.style.display = "flex";
            weaponsSectionElement.style.display = "none";
        });
    };

    weaponTypes.forEach(weaponType => {
        if (weaponType.classList.contains("chosen-weapon") && weaponType.textContent != chooseWeaponButtonElement.textContent) {
            weaponType.classList.remove("chosen-weapon");
            }
        });
}

chooseWeaponButtonElement.addEventListener("click", chooseWeapon);
