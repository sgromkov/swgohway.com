import dbConnect from '../../utilities/dbConnect.js';
import Fraction from '../../models/Fraction.js';
import characters from '../../__mocks__/characters.json';
import roles from '../../__mocks__/roles.json';
import features from '../../__mocks__/features.json';

await dbConnect();

const roleTitles = roles.map((role) => role.title);

const featureTitles = features.map((feature) => feature.title);

const removeRolesFromFractions = function (fraction) {
    return roleTitles.indexOf(fraction) === -1;
};

const removeFeaturesFromFractions = function (fraction) {
    return featureTitles.reduce((isFraction, feature) => {
        return (feature === fraction) ? false : isFraction;
    }, true);
};

const fractionTitles = characters.reduce((fractionTitles, character) => {
    const characterFractionTitles = character.categories
        .filter(removeRolesFromFractions)
        .filter(removeFeaturesFromFractions);

        characterFractionTitles.forEach((fractionTitle) => {
            if (fractionTitles.indexOf(fractionTitle) === -1) {
                fractionTitles.push(fractionTitle);
            }
        });

        return fractionTitles;
}, []);

const fractions = fractionTitles.map((fractionTitle) => {
    return {
        code: fractionTitle.toLowerCase().replace(/ /g, '-'),
        title: fractionTitle
    };
});

fractions.forEach(async (fraction) => {
    try {
        const createdFraction = await Fraction.create(fraction);
        console.log('New fraction has created:', createdFraction);
    } catch (error) {
        throw new Error(error);
    }
});
