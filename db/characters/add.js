import dbConnect from '../../utilities/dbConnect.js';
import Alignment from '../../models/Alignment.js';
import Role from '../../models/Role.js';
import Fraction from '../../models/Fraction.js';
import Character from '../../models/Character.js';
import mockedCharacters from '../../__mocks__/characters.json';

await dbConnect();

const alignments = await Alignment.find({});
const roles = await Role.find({});
const fractions = await Fraction.find({});

const LEADER = 'Leader';
const FLEET_COMMANDER = 'Fleet Commander';
const GALACTIC_LEGEND = 'Galactic Legend';
const features = [LEADER, FLEET_COMMANDER, GALACTIC_LEGEND];

const removeFeaturesFromFractions = function (fraction) {
    return features.reduce((isFraction, feature) => (feature === fraction) ? false : isFraction, true);
};

const removeRolesFromFractions = function (fraction) {
    return roles.reduce((isFraction, role) => (role.title === fraction) ? false : isFraction, true);
};

const characters = mockedCharacters.map((el) => {
    const characterCode = el.url.replace('http://swgoh.gg/characters/', '').replace('/', '');

    const characterImagePath = `/images/characters/${characterCode}.png`;

    const characterAlignment = alignments.filter((alignment) => alignment.title === el.alignment)[0];

    const characterFractionTitles = el.categories
        .filter(removeRolesFromFractions)
        .filter(removeFeaturesFromFractions);
    const characterFractions = characterFractionTitles.map((fractionTitle) => {
        return fractions.reduce((id, fraction) => (fraction.title === fractionTitle) ? fraction._id : id, null);
    });

    const characterRoleTitle = (el.role === LEADER)
        ? el.categories.filter((category) => {
            return ((roles.filter((role) => role.title === category)).length > 0);
        })[0]
        : el.role;
    const characterRole = roles.filter((role) => role.title === characterRoleTitle)[0];

    const isLeader = (el.role === LEADER) || (el.categories.indexOf(LEADER) > -1);

    const isFleetCommander = el.categories.indexOf(FLEET_COMMANDER) > -1;

    const isGalacticLegend = el.categories.indexOf(GALACTIC_LEGEND) > -1;

    const character = {
        name: el.name,
        code: characterCode,
        swgohggBaseId: el.base_id,
        image: characterImagePath,
        power: el.power,
        description: el.description,
        alignment: characterAlignment._id,
        fractions: characterFractions,
        role: characterRole._id,
        ability: el.ability_classes,
        ship: el.ship,
        shipSlot: el.ship_slot,
        activateShardCount: el.activate_shard_count,
        leader: isLeader,
        fleetCommander: isFleetCommander,
        galacticLegend: isGalacticLegend,
    };

    return character;
});

characters.forEach(async (character) => {
    try {
        const createdCharacter = await Character.create(character);
        console.log('New character has created:', createdCharacter);
    } catch (error) {
        console.log('error', error);
        throw new Error(error);
    }
});
