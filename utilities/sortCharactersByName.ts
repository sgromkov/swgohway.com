import { Character } from "../types";

export default function sortCharactersByName(a: Character, b: Character) {
    return (a.name > b.name) ? 1 : -1;
}