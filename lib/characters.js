const CHARACTERS_URL = 'https://swgoh.gg/api/characters/';

export async function getCharacters() {
    const res = await fetch(CHARACTERS_URL);
    const data = res.json();

    return data;
}
