import { Ship } from "../types";

export default function reduceFactionsByShips(factionCodes: string[], ship: Ship) {
    ship.factions.forEach((faction) => {
        if (factionCodes.indexOf(faction.code) === -1) {
            factionCodes.push(faction.code);
        }
    });

    return factionCodes;
}