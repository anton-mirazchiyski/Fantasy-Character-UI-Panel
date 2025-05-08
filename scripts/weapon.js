const chooseWeaponButtonElement = document.querySelector(".choose-weapon-btn");
const weaponsSectionElement = document.querySelector(".weapon-section");
const weaponTypes = document.querySelectorAll(".weapon-type");


function chooseWeapon() {
    panelListElement.style.display = "none";
    weaponsSectionElement.style.display = "flex";
    
    weaponTypes.forEach(weaponType => {
        weaponType.addEventListener("click", (e) => {
            const weapon = e.target;
            chooseWeaponButtonElement.textContent = weapon.textContent;
            // weapon.classList.remove("weapon-type");
            weapon.classList.add("chosen-weapon");
            panelListElement.style.display = "flex";
            weaponsSectionElement.style.display = "none";
        });
    });
}

chooseWeaponButtonElement.addEventListener("click", chooseWeapon);
