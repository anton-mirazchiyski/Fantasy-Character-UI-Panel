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

function determinePhrasesOrder() {
    const firstPhrase = Math.floor(Math.random() * 2) === 0 ? 'origin' : 'characterType';
    const secondPhrase = firstPhrase === 'characterType' ? 'origin' : 'characterType';
    const thirdPhrase = 'purpose';
    
    const order = {
        1: firstPhrase,
        2: secondPhrase,
        3: thirdPhrase,
    };
    return order;
}

function constructLore() {
    const characterName = nameElement.textContent;
    const weaponName = weaponElement.textContent;

    let characterType;
    let [origin, originType] = chooseOrigin();
    let purpose = pickRandomOption(purposes);

    if (meleeWeapons.includes(weaponName)) {
        characterType = pickRandomOption(characterTypes.warrior);
    } else if (mageWeapons.includes(weaponName)) {
        characterType = pickRandomOption(characterTypes.mage);
    } else if (rangedWeapons.includes(weaponName)) {
        characterType = pickRandomOption(characterTypes.archer);
    }
    
    const phrases = {
        origin,
        characterType,
        purpose,
    };
    const phrasesOrder = determinePhrasesOrder();

    let lore = [
        characterName + ' ',
        phrases[phrasesOrder['1']],
        pickRandomOption(originType === 'noble' ? connectors.addition : connectors.opposition),
        pronoun.toLowerCase() + ' ',
        phrases[phrasesOrder['2']] + '.',
        ' ' + pronoun + ' ',
        phrases[phrasesOrder['3']] + '.'
    ].join('');

    console.log(lore);
}

createCharacterButtonElement.addEventListener('click', constructLore);
