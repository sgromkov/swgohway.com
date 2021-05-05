import dbConnect from '../utilities/dbConnect';
import Role from '../models/Role';

export async function getRoles() {
    await dbConnect();

    const results = await Role.find({});

    const roles = results.map((result) => result.toJSON());

    return roles;
}
