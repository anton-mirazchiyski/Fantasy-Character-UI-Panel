import { pickRandomOption } from "./utils.js";

export const words = {
    elementTypes: ['fire', 'lightning', 'cold', 'arcane'],
    stolenItems: ['ring', 'sword', 'gold', 'necklace'],
    familyRelatives: ['wife', 'brother', 'sister', 'mother', 'father'],
    legendaryObjects: ['artifact', 'two-handed sword', 'silver dagger'],
};

export const connectors = {
    addition: [' and ',  '. Moreover, ', '. Alongside this ', '. In addition, ', '. Furthermore, '],
    opposition: [' but ', '. However, ', '. On the other hand, ', '. Nevertheless, '],
};

export const pronoun = 'He';

export const characterTypes = {
    warrior: [
        'is a battle-hardened warrior',
        'wields his weapon with great strength',
        'often carries his army\'s warbanner on the battlefield',
    ],
    mage: [
        'is a battle-born mage',
        `can strike his enemies with ${pickRandomOption(words.elementTypes)} magic from afar`,
        'is a respected wizard',
        'is a battlemage',
    ],
    archer: [
        'has the ability to fire multiple shots at once',
    ],
};

export const origins = {
    noble: [
        'comes from a noble family',
        'is a capable soldier of an empire',
        'has been known to be with royal blood',
    ],
    poor: [
        'comes from a poor family',
        'has been raised in a monastery',
        'has endured life\'s hardships',
        'grew as a farmer in a small village',
    ],
};

export const purposes = [
    `seeks to return his family\'s stolen ${pickRandomOption(words.stolenItems)}`,
    `seeks revenge for his ${pickRandomOption(words.familyRelatives)}`,
    'must return his army\'s lost banner',
    `has a mission of finding a legendary ${pickRandomOption(words.legendaryObjects)}`,
];

export const meleeWeapons = [
    'Sword & Shield', 'Axe & Shield', 'Dual Swords', 'Dual Axes', 'Spear & Shield',
    'Greatsword', 'Battleaxe', 'Warhammer', 'Atgeir', 'Halberd', 'Dagger',
];

export const mageWeapons = ['Staff'];

export const rangedWeapons = ['Bow', 'Crossbow'];
