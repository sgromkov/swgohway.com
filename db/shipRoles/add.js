import dbConnect from '../../utilities/dbConnect.js';
import ShipRole from '../../models/ShipRole.js';
import shipRoles from '../../__mocks__/shipRoles.json';

await dbConnect();

shipRoles.forEach(async (role) => {
    try {
        const createdRole = await ShipRole.create(role);
        console.log('New role has created:', createdRole);
    } catch (error) {
        throw new Error(error);
    }
});
