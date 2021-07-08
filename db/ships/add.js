import dbConnect from '../../utilities/dbConnect.js';
import Alignment from '../../models/Alignment.js';
import ShipRole from '../../models/ShipRole';
import Faction from '../../models/Faction.js';
import Ship from '../../models/Ship.js';
import mockedShips from '../../__mocks__/ships.json';

await dbConnect();

const alignments = await Alignment.find({});
const shipRoles = await ShipRole.find({});
const factions = await Faction.find({});

const CARGO_SHIP = 'Cargo Ship';
const features = [CARGO_SHIP];

const removeFeaturesFromFactions = function (faction) {
    return features.reduce((isFaction, feature) => (feature === faction) ? false : isFaction, true);
};

const removeShipRolesFromFactions = function (faction) {
    return shipRoles.reduce((isFaction, role) => (role.title === faction) ? false : isFaction, true);
};

const ships = mockedShips.map((el) => {
    const shipCode = el.url.replace('http://swgoh.gg/ships/', '').replace('/', '');

    const shipImagePath = `/images/ships/${shipCode}.png`;

    const shipAlignment = alignments.filter((alignment) => alignment.title === el.alignment)[0];

    const shipFactionTitles = el.categories
        .filter(removeShipRolesFromFactions)
        .filter(removeFeaturesFromFactions);
    const shipFactions = shipFactionTitles.map((factionTitle) => {
        return factions.reduce((id, faction) => (faction.title === factionTitle) ? faction._id : id, null);
    });

    const shipRoleTitle = el.role;
    const shipRole = shipRoles.filter((role) => role.title === shipRoleTitle)[0];

    const isCargoShip = el.categories.indexOf(CARGO_SHIP) > -1;

    const ship = {
        name: el.name,
        code: shipCode,
        swgohggBaseId: el.base_id,
        image: shipImagePath,
        power: el.power,
        description: el.description,
        alignment: shipAlignment._id,
        factions: shipFactions,
        role: shipRole._id,
        ability: el.ability_classes,
        activateShardCount: el.activate_shard_count,
        cargoShip: isCargoShip,
    };

    return ship;
});

ships.forEach(async (ship) => {
    try {
        const createdShip = await Ship.create(ship);
        console.log('New ship has created:', createdShip);
    } catch (error) {
        console.log('error', error);
        throw new Error(error);
    }
});
