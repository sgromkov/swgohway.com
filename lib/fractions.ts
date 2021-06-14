import dbConnect from '../utilities/dbConnect';
import Fraction from '../models/Fraction';

export async function getFractions() {
    await dbConnect();

    const results = await Fraction.find({});

    const fractions = results.map((result) => result.toJSON());

    return fractions;
}
