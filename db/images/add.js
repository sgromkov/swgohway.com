const download = require('../../utilities/download');
const mockedCharacters = require('../../__mocks__/characters.json');
const mockedShips = require('../../__mocks__/ships.json');

mockedCharacters.forEach(async (character) => {
    const code = character.url.replace('http://swgoh.gg/characters/', '').replace('/', '');
    const imagePath = character.image;
    const newImagePath = `./public/images/characters/${code}.png`;

    const data = await download(imagePath, newImagePath);
    console.log(data);
});

mockedShips.forEach(async (ship) => {
    const code = ship.url.replace('http://swgoh.gg/ships/', '').replace('/', '');
    const imagePath = ship.image;
    const newImagePath = `./public/images/ships/${code}.png`;

    const data = await download(imagePath, newImagePath);
    console.log(data);
});
