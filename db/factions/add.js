import dbConnect from '../../utilities/dbConnect.js';
import Faction from '../../models/Faction.js';
import characters from '../../__mocks__/characters.json';
import roles from '../../__mocks__/roles.json';
import features from '../../__mocks__/features.json';

await dbConnect();

const roleTitles = roles.map((role) => role.title);

const featureTitles = features.map((feature) => feature.title);

const removeRolesFromFactions = function (faction) {
    return roleTitles.indexOf(faction) === -1;
};

const removeFeaturesFromFactions = function (faction) {
    return featureTitles.reduce((isFaction, feature) => {
        return (feature === faction) ? false : isFaction;
    }, true);
};

const factionTitles = characters.reduce((factionTitles, character) => {
    const characterFactionTitles = character.categories
        .filter(removeRolesFromFactions)
        .filter(removeFeaturesFromFactions);

        characterFactionTitles.forEach((factionTitle) => {
            if (factionTitles.indexOf(factionTitle) === -1) {
                factionTitles.push(factionTitle);
            }
        });

        return factionTitles;
}, []);

const factions = factionTitles.map((factionTitle) => {
    return {
        code: factionTitle.toLowerCase().replace(/ /g, '-'),
        title: factionTitle
    };
});

factions.forEach(async (faction) => {
    try {
        const createdFaction = await Faction.create(faction);
        console.log('New faction has created:', createdFaction);
    } catch (error) {
        throw new Error(error);
    }
});
