const CHARACTERS_URL = 'https://swgoh.gg/api/characters/';

export async function getCharacters() {
    // const res = await fetch(CHARACTERS_URL);
    const res = await fetch('http://localhost:3000/characters.json');
    const fetchedCharacters = await res.json();

    const LEADER = 'Leader';

    const FLEET_COMMANDER = 'Fleet Commander';

    const GALACTIC_LEGEND = 'Galactic Legend';

    const features = [LEADER, FLEET_COMMANDER, GALACTIC_LEGEND];

    const removeFeaturesFromFractions = function (fraction) {
        let isFraction = true;

        features.forEach((feature) => {
            if (feature === fraction) {
                isFraction = false;
            }
        });

        return isFraction;
    };

    const alignments = [
        {
            code: 'light',
            title: 'Light Side'
        },
        {
            code: 'dark',
            title: 'Dark Side'
        },
    ];

    const roles = fetchedCharacters.reduce((roles, character) => {
        const { role } = character;

        if (roles.indexOf(role) === -1) {
            roles.push(role);
        }

        return roles;
    }, []).filter((role) => role !== LEADER);

    const removeRolesFromFractions = function (fraction) {
        return roles.indexOf(fraction) === -1;
    };

    // const fractions = fetchedCharacters.reduce((categories, character) => {
    //     character.categories.forEach((category) => {
    //         if (categories.indexOf(category) === -1) {
    //             categories.push(category);
    //         }
    //     });

    //     return categories;
    // }, []).filter(removeRolesFromFractions).filter(removeFeaturesFromFractions);

    const characters = fetchedCharacters.map((character) => {
        const characterAlignment = alignments.filter((alignment) => alignment.title === character.alignment)[0];

        const characterRoleTitle = (character.role === LEADER)
            ? character.categories.filter((category) => roles.indexOf(category) > -1)[0]
            : character.role;

        const characterRole = {
            code: characterRoleTitle.toLowerCase(),
            title: characterRoleTitle
        };

        const characterFractionTitles = character.categories
            .filter(removeRolesFromFractions)
            .filter(removeFeaturesFromFractions);

        const characterFractions = characterFractionTitles.map((fractionTitle) => {
            return {
                code: fractionTitle.toLowerCase(),
                title: fractionTitle
            };
        });

        const isLeader = (character.role === LEADER) || (character.categories.indexOf(LEADER) > -1);

        const isFleetCommander = character.categories.indexOf(FLEET_COMMANDER) > -1;

        const isGalacticLegend = character.categories.indexOf(GALACTIC_LEGEND) > -1;

        return {
            name: character.name,
            id: character.base_id,
            image: character.image,
            alignment: characterAlignment,
            role: characterRole,
            fractions: characterFractions,
            leader: isLeader,
            fleetCommander: isFleetCommander,
            galacticLegend: isGalacticLegend
        };
    });

    return characters;
}
