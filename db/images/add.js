const download = require('../../utilities/download');
const mockedCharacters = require('../../__mocks__/characters.json');

mockedCharacters.forEach(async (character) => {
    const code = character.url.replace('http://swgoh.gg/characters/', '').replace('/', '');
    const imagePath = `https://swgoh.gg${character.image}`;
    const newImagePath = `./public/images/characters/${code}.png`;

    const data = await download(imagePath, newImagePath);
    console.log(data);
});
