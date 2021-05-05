import dbConnect from '../../utilities/dbConnect.js';
import Role from '../../models/Role.js';
import roles from '../../__mocks__/roles.json';

await dbConnect();

roles.forEach(async (role) => {
    try {
        const createdRole = await Role.create(role);
        console.log('New role has created:', createdRole);
    } catch (error) {
        throw new Error(error);
    }
});
