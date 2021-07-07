import charactersFiltration from './charactersFiltration';

let params = [];

const clearParams = function () {
    params = [];
}

describe('charactersFiltration.setFactions() does not set factions param to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setFactions(params);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setFactions(params, '');

        expect(params).toEqual([]);
    });

    test('if passed string with value', () => {
        params = charactersFiltration.setFactions(params, 'tank');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setFactions(params, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        params = charactersFiltration.setFactions(params, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setFactions(params, []);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        params = charactersFiltration.setFactions(params, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        params = charactersFiltration.setFactions(params, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setFactions(params, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setFactions(params, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setFactions(params, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setFactions(params, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltration.setFactions() does not set factions param to prefilled params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'features',
            value: ['GalacticLegend']
        }];
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setFactions(params);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setFactions(params, '');

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setFactions(params, undefined);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed null', () => {
        params = charactersFiltration.setFactions(params, null);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setFactions(params, []);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed function', () => {
        params = charactersFiltration.setFactions(params, () => { });

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed number', () => {
        params = charactersFiltration.setFactions(params, 10);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setFactions(params, true);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setFactions(params, false);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setFactions(params, {});

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setFactions(params, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });
});

describe('charactersFiltration.setFactions() removes factions param from params with factions only', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'factions',
            value: ['Jedi', 'Sith']
        }];
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setFactions(params);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setFactions(params, '');

        expect(params).toEqual([]);
    });

    test('if passed string with value', () => {
        params = charactersFiltration.setFactions(params, 'tank');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setFactions(params, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        params = charactersFiltration.setFactions(params, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setFactions(params, []);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        params = charactersFiltration.setFactions(params, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        params = charactersFiltration.setFactions(params, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setFactions(params, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setFactions(params, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setFactions(params, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setFactions(params, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltration.setFactions() removes factions param from params with different params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'role',
            value: ['attacker', 'tank']
        }, {
            name: 'factions',
            value: ['Jedi']
        }];
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setFactions(params);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setFactions(params, '');

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed string with value', () => {
        params = charactersFiltration.setFactions(params, 'healer');

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setFactions(params, undefined);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed null', () => {
        params = charactersFiltration.setFactions(params, null);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setFactions(params, []);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed function', () => {
        params = charactersFiltration.setFactions(params, () => { });

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed number', () => {
        params = charactersFiltration.setFactions(params, 10);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setFactions(params, true);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setFactions(params, false);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setFactions(params, {});

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setFactions(params, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });
});

describe('charactersFiltration.setFactions() sets factions param correctly to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed value ["Bounty Hunter"]', () => {
        params = charactersFiltration.setFactions(params, ['Bounty Hunter']);

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Bounty Hunter']
            }]
        );
    });

    test('if passed values ["Separatist", "Droid"]', () => {
        params = charactersFiltration.setFactions(params, ['Separatist', 'Droid']);

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Separatist', 'Droid']
            }]
        );
    });

    test('if passed value ["501st", "Clone Trooper", "Empire"]', () => {
        params = charactersFiltration.setFactions(params, ['501st', 'Clone Trooper', 'Empire']);

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['501st', 'Clone Trooper', 'Empire']
            }]
        );
    });
});

describe('charactersFiltration.setFactions() sets factions param correctly to params with existed faction', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if exists one another faction', () => {
        params = [{
            name: 'factions',
            value: ['Resistance']
        }];

        params = charactersFiltration.setFactions(params, ['Ewok']);

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Ewok']
            }]
        );
    });

    test('if exists two another factions', () => {
        params = [{
            name: 'factions',
            value: ['Phoenix', 'Geonosian']
        }];

        params = charactersFiltration.setFactions(params, ['Jawa', 'Bad Batch']);

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Jawa', 'Bad Batch']
            }]
        );
    });
});

describe('charactersFiltration.setFactions() sets factions param correctly to params with other params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if exists one other param', () => {
        params = [{
            name: 'features',
            value: ['fleetCommander', 'galacticLegend']
        }];

        params = charactersFiltration.setFactions(params, ['Jedi']);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['fleetCommander', 'galacticLegend']
            }, {
                name: 'factions',
                value: ['Jedi']
            }]
        );
    });

    test('if exists two other params', () => {
        params = [{
            name: 'features',
            value: ['fleetCommander', 'galacticLegend']
        }, {
            name: 'alignment',
            value: 'dark'
        }];

        params = charactersFiltration.setFactions(params, ['First Order', 'Mandalorian', 'Rogue One']);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['fleetCommander', 'galacticLegend']
            }, {
                name: 'alignment',
                value: 'dark'
            }, {
                name: 'factions',
                value: ['First Order', 'Mandalorian', 'Rogue One']
            }]
        );
    });

    test('if exists few other params and one factions param', () => {
        params = [{
            name: 'features',
            value: ['fleetCommander', 'galacticLegend']
        }, {
            name: 'alignment',
            value: 'dark'
        }, {
            name: 'factions',
            value: ['Jedi']
        }, {
            name: 'role',
            value: ['support']
        }];

        params = charactersFiltration.setFactions(params, ['Rebel Fighter']);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['fleetCommander', 'galacticLegend']
            }, {
                name: 'alignment',
                value: 'dark'
            }, {
                name: 'role',
                value: ['support']
            }, {
                name: 'factions',
                value: ['Rebel Fighter']
            }]
        );
    });
});
