import dbConnect from '../utilities/dbConnect';
import Character from '../models/Character';

export async function getCharacters() {
    await dbConnect();

    const results = await Character.find({})
        .populate({ path: 'alignment', select: 'title code' })
        .populate({ path: 'fractions', select: 'title code' })
        .populate({ path: 'role', select: 'title code' })

    const characters = results.map((result) => result.toJSON());

    return characters;
}
