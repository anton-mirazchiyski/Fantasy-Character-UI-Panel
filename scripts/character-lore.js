const nameElement = document.querySelector('.panel-btn.choose-name-btn')
const raceElement = document.querySelector('.panel-btn.choose-race-btn');
const weaponElement = document.querySelector('.panel-btn.choose-weapon-btn');
const createCharacterButtonElement = document.querySelector('.create-character-btn');

const words = {
    elementTypes: ['fire', 'lightning', 'cold', 'arcane'],
    stolenItems: ['ring', 'sword', 'gold', 'necklace'],
    connectors: [' and ', ', moreover ', '. He ', ', he '],
    familyRelatives: ['wife', 'brother', 'sister', 'mother', 'father'],
    wealthTypes: ['noble', 'poor']
}

const phrases = {
    warrior: [
        'is a battle-hardened warrior',
        'sometimes makes his enemies flee from battle',
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
    origin: [
        `comes from a ${pickRandomOption(words.wealthTypes)} family`,
        'is a capable soldier of an empire',
        'has endured life\'s hardships',
    ],
    purpose: [
        `seeks to return his family\'s stolen ${pickRandomOption(words.stolenItems)}`,
        `seeks revenge for his ${pickRandomOption(words.familyRelatives)}`,
        'must return his army\'s lost warbanner',
    ]
};

const meleeWeapons = [
    'Sword & Shield', 'Axe & Shield', 'Dual Swords', 'Dual Axes', 'Spear & Shield',
    'Greatsword', 'Battleaxe', 'Warhammer', 'Atgeir', 'Halberd', 'Dagger',
];

const mageWeapons = ['Staff'];

const rangedWeapons = ['Bow', 'Crossbow'];

function pickRandomOption(options) {
    return options[Math.floor(Math.random() * options.length)];
}

function constructText() {
    const characterName = nameElement.textContent;
    const weaponName = weaponElement.textContent;

    let type;
    let origin = pickRandomOption(phrases.origin);
    let purpose = pickRandomOption(phrases.purpose);

    if (meleeWeapons.includes(weaponName)) {
        type = pickRandomOption(phrases.warrior);
    } else if (mageWeapons.includes(weaponName)) {
        type = pickRandomOption(phrases.mage);
    } else if (rangedWeapons.includes(weaponName)) {
        type = pickRandomOption(phrases.archer);
    }

    let result = [
        characterName + ' ',
        origin,
        pickRandomOption(words.connectors),
        type,
        pickRandomOption(words.connectors),
        purpose,
        '.'
    ].join('');

    console.log(result);
}

createCharacterButtonElement.addEventListener('click', constructText);
