import dbConnect from '../../utilities/dbConnect.js';
import Alignment from '../../models/Alignment.js';
import Role from '../../models/Role.js';
import Faction from '../../models/Faction.js';
import Character from '../../models/Character.js';
import mockedCharacters from '../../__mocks__/characters.json';

await dbConnect();

const alignments = await Alignment.find({});
const roles = await Role.find({});
const factions = await Faction.find({});

const LEADER = 'Leader';
const FLEET_COMMANDER = 'Fleet Commander';
const GALACTIC_LEGEND = 'Galactic Legend';
const features = [LEADER, FLEET_COMMANDER, GALACTIC_LEGEND];

const removeFeaturesFromFactions = function (faction) {
    return features.reduce((isFaction, feature) => (feature === faction) ? false : isFaction, true);
};

const removeRolesFromFactions = function (faction) {
    return roles.reduce((isFaction, role) => (role.title === faction) ? false : isFaction, true);
};

const characters = mockedCharacters.map((el) => {
    const characterCode = el.url.replace('http://swgoh.gg/characters/', '').replace('/', '');

    const characterImagePath = `/images/characters/${characterCode}.png`;

    const characterAlignment = alignments.filter((alignment) => alignment.title === el.alignment)[0];

    const characterFactionTitles = el.categories
        .filter(removeRolesFromFactions)
        .filter(removeFeaturesFromFactions);
    const characterFactions = characterFactionTitles.map((factionTitle) => {
        return factions.reduce((id, faction) => (faction.title === factionTitle) ? faction._id : id, null);
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
        factions: characterFactions,
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
