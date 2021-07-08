import dbConnect from '../utilities/dbConnect';
import ShipRole from '../models/ShipRole';

export async function getShipRoles() {
    await dbConnect();

    const results = await ShipRole.find({});

    const shipRoles = results.map((result) => result.toJSON());

    return shipRoles;
}
