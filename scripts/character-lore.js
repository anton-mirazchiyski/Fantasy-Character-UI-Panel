import { archerPrimaryAttribute, characterTypes, connectors, magePrimaryAttribute, mageWeapons, oneHandedWeapons, origins, pronoun, purposes, rangedWeapons, twoHandedWeapons, warriorPrimaryAttribute, warriorSecondaryAttribute } from "./lore-data.js";
import { pickRandomOption } from "./utils.js";

const nameElement = document.querySelector('.panel-btn.choose-name-btn');
const raceElement = document.querySelector('.panel-btn.choose-race-btn');
const weaponElement = document.querySelector('.panel-btn.choose-weapon-btn');
const mainStatElement = document.querySelector('.panel-btn.choose-mainStat-btn');
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

function isWarrior(weapon, mainStat) {
    if (twoHandedWeapons.includes(weapon) && mainStat === warriorPrimaryAttribute) {
        return true;
    }
    if (oneHandedWeapons.includes(weapon)) {
        if ([warriorPrimaryAttribute, warriorSecondaryAttribute].includes(mainStat)) {
            return true;
        }
    }
    return false;
}

function isMage(weapon, mainStat) {
    return mageWeapons.includes(weapon) && mainStat === magePrimaryAttribute;
}

function isArcher(weapon, mainStat) {
    return rangedWeapons.includes(weapon) && mainStat === archerPrimaryAttribute;
}

function cannotCarry2HMeleeWeapon(weapon, mainStat) {
    return twoHandedWeapons.includes(weapon) && mainStat !== warriorPrimaryAttribute;
}

function cannotCarry1HMeleeWeapon(weapon, mainStat) {
    return oneHandedWeapons.includes(weapon) && ![warriorPrimaryAttribute, warriorSecondaryAttribute].includes(mainStat);
}

function cannotUseMageWeapon(weapon, mainStat) {
    return mageWeapons.includes(weapon) && mainStat !== magePrimaryAttribute;
}

function cannotUseRangedWeapon(weapon, mainStat) {
    return rangedWeapons.includes(weapon) && mainStat !== archerPrimaryAttribute;
}

function constructLore() {
    const characterName = nameElement.textContent;
    const weapon = weaponElement.textContent;
    const mainStat = mainStatElement.textContent;

    let characterType;
    let [origin, originType] = chooseOrigin();
    let purpose = pickRandomOption(purposes);
    let message = null;

    if (isWarrior(weapon, mainStat)) {
        characterType = pickRandomOption(characterTypes.warrior);
    } else if (isMage(weapon, mainStat)) {
        characterType = pickRandomOption(characterTypes.mage);
    } else if (isArcher(weapon, mainStat)) {
        characterType = pickRandomOption(characterTypes.archer);
    } else if (cannotCarry2HMeleeWeapon(weapon, mainStat)) {
        message = 'Your character lacks strength to carry this weapon.';
    } else if (cannotCarry1HMeleeWeapon(weapon, mainStat)) {
        message = 'Your character either lacks agility or is not strong enough to use this weapon.';
    } else if (cannotUseMageWeapon(weapon, mainStat)) {
        message = 'Your character does not have enough intelligence to use such a weapon.';
    } else if (cannotUseRangedWeapon(weapon, mainStat)) {
        message = 'Your character needs agility to use this weapon.'
    }

    if (message) {
        return console.log(message);
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
