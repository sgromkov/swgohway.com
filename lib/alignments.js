import dbConnect from '../utilities/dbConnect';
import Alignment from '../models/Alignment';

export async function getAlignments() {
    await dbConnect();

    const results = await Alignment.find({});

    const alignments = results.map((result) => result.toJSON());

    return alignments;
}
