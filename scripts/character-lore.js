const nameElement = document.querySelector('.panel-btn.choose-name-btn')
const raceElement = document.querySelector('.panel-btn.choose-race-btn');
const weaponElement = document.querySelector('.panel-btn.choose-weapon-btn');
const createCharacterButtonElement = document.querySelector('.create-character-btn');

const words = {
    elementTypes: ['fire', 'lightning', 'cold', 'arcane'],
    stolenItems: ['ring', 'sword', 'gold', 'necklace'],
    familyRelatives: ['wife', 'brother', 'sister', 'mother', 'father'],
    legendaryObjects: ['artifact', 'two-handed sword', 'silver dagger'],
};

const connectors = {
    addition: [' and ',  '. Moreover, ', '. Alongside this ', '. In addition, ', '. Furthermore, '],
    opposition: [' but ', '. However, ', '. On the other hand, ', '. Nevertheless, '],
};

const pronoun = 'He';

const phrases = {
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
    origin: {
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
    },
    purpose: [
        `seeks to return his family\'s stolen ${pickRandomOption(words.stolenItems)}`,
        `seeks revenge for his ${pickRandomOption(words.familyRelatives)}`,
        'must return his army\'s lost banner',
        `has a mission of finding a legendary ${pickRandomOption(words.legendaryObjects)}`,
    ],
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

function chooseOrigin() {
    const originTypes = ['noble', 'poor'];

    let originType = pickRandomOption(originTypes);
    let origin = pickRandomOption(phrases.origin[originType]);
    return [origin, originType];
}

function constructText() {
    const characterName = nameElement.textContent;
    const weaponName = weaponElement.textContent;

    let type;
    let [origin, originType] = chooseOrigin();
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
        pickRandomOption(originType === 'noble' ? connectors.addition : connectors.opposition),
        type,
        '. ' + pronoun + ' ',
        purpose,
        '.'
    ].join('');

    console.log(result);
}

createCharacterButtonElement.addEventListener('click', constructText);
