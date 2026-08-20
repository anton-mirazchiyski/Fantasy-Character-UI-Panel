import { characterTypes, connectors, mageWeapons, meleeWeapons, origins, pronoun, purposes, rangedWeapons } from "./lore-data.js";
import { pickRandomOption } from "./utils.js";

const nameElement = document.querySelector('.panel-btn.choose-name-btn')
const raceElement = document.querySelector('.panel-btn.choose-race-btn');
const weaponElement = document.querySelector('.panel-btn.choose-weapon-btn');
const createCharacterButtonElement = document.querySelector('.create-character-btn');


function chooseOrigin() {
    const originTypes = ['noble', 'poor'];

    let originType = pickRandomOption(originTypes);
    let origin = pickRandomOption(origins[originType]);
    return [origin, originType];
}

function constructText() {
    const characterName = nameElement.textContent;
    const weaponName = weaponElement.textContent;

    let type;
    let [origin, originType] = chooseOrigin();
    let purpose = pickRandomOption(purposes);

    if (meleeWeapons.includes(weaponName)) {
        type = pickRandomOption(characterTypes.warrior);
    } else if (mageWeapons.includes(weaponName)) {
        type = pickRandomOption(characterTypes.mage);
    } else if (rangedWeapons.includes(weaponName)) {
        type = pickRandomOption(characterTypes.archer);
    }

    let result = [
        characterName + ' ',
        origin,
        pickRandomOption(originType === 'noble' ? connectors.addition : connectors.opposition),
        type,
        '. ' + pronoun + ' ',
        purpose,
        '.'
    ].join('');

    console.log(result);
}

createCharacterButtonElement.addEventListener('click', constructText);
