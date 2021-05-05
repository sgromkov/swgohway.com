import dbConnect from '../../utilities/dbConnect.js';
import Alignment from '../../models/Alignment.js';
import alignments from '../../__mocks__/alignments.json';

await dbConnect();

alignments.forEach(async (alignment) => {
    try {
        const createdAlignment = await Alignment.create(alignment);
        console.log('New alignmnet has created:', createdAlignment);
    } catch (error) {
        throw new Error(error);
    }
});
