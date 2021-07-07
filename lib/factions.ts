import dbConnect from '../utilities/dbConnect';
import Faction from '../models/Faction';

export async function getFactions() {
    await dbConnect();

    const results = await Faction.find({});

    const factions = results.map((result) => result.toJSON());

    return factions;
}
