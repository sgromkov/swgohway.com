import dbConnect from '../utilities/dbConnect';
import Ship from '../models/Ship';

export async function getShips() {
    await dbConnect();

    const results = await Ship.find({})
        .populate({ path: 'alignment', select: 'title code' })
        .populate({ path: 'factions', select: 'title code' })
        .populate({ path: 'role', select: 'title code' })

    const ships = results.map((result) => result.toJSON());

    return ships;
}
