import charactersFiltration from './charactersFiltration';

let params = [];

const clearParams = function () {
    params = [];
}

describe('charactersFiltration.setFractions() does not set fractions param to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setFractions(params);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setFractions(params, '');

        expect(params).toEqual([]);
    });

    test('if passed string with value', () => {
        params = charactersFiltration.setFractions(params, 'tank');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setFractions(params, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        params = charactersFiltration.setFractions(params, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setFractions(params, []);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        params = charactersFiltration.setFractions(params, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        params = charactersFiltration.setFractions(params, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setFractions(params, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setFractions(params, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setFractions(params, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setFractions(params, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltration.setFractions() does not set fractions param to prefilled params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'features',
            value: ['GalacticLegend']
        }];
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setFractions(params);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setFractions(params, '');

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setFractions(params, undefined);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed null', () => {
        params = charactersFiltration.setFractions(params, null);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setFractions(params, []);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed function', () => {
        params = charactersFiltration.setFractions(params, () => { });

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed number', () => {
        params = charactersFiltration.setFractions(params, 10);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setFractions(params, true);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setFractions(params, false);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setFractions(params, {});

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setFractions(params, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });
});

describe('charactersFiltration.setFractions() removes fractions param from params with fractions only', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'fractions',
            value: ['Jedi', 'Sith']
        }];
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setFractions(params);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setFractions(params, '');

        expect(params).toEqual([]);
    });

    test('if passed string with value', () => {
        params = charactersFiltration.setFractions(params, 'tank');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setFractions(params, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        params = charactersFiltration.setFractions(params, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setFractions(params, []);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        params = charactersFiltration.setFractions(params, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        params = charactersFiltration.setFractions(params, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setFractions(params, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setFractions(params, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setFractions(params, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setFractions(params, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltration.setFractions() removes fractions param from params with different params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'role',
            value: ['attacker', 'tank']
        }, {
            name: 'fractions',
            value: ['Jedi']
        }];
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setFractions(params);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setFractions(params, '');

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed string with value', () => {
        params = charactersFiltration.setFractions(params, 'healer');

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setFractions(params, undefined);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed null', () => {
        params = charactersFiltration.setFractions(params, null);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setFractions(params, []);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed function', () => {
        params = charactersFiltration.setFractions(params, () => { });

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed number', () => {
        params = charactersFiltration.setFractions(params, 10);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setFractions(params, true);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setFractions(params, false);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setFractions(params, {});

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setFractions(params, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });
});

describe('charactersFiltration.setFractions() sets fractions param correctly to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed value ["Bounty Hunter"]', () => {
        params = charactersFiltration.setFractions(params, ['Bounty Hunter']);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Bounty Hunter']
            }]
        );
    });

    test('if passed values ["Separatist", "Droid"]', () => {
        params = charactersFiltration.setFractions(params, ['Separatist', 'Droid']);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Separatist', 'Droid']
            }]
        );
    });

    test('if passed value ["501st", "Clone Trooper", "Empire"]', () => {
        params = charactersFiltration.setFractions(params, ['501st', 'Clone Trooper', 'Empire']);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['501st', 'Clone Trooper', 'Empire']
            }]
        );
    });
});

describe('charactersFiltration.setFractions() sets fractions param correctly to params with existed fraction', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if exists one another fraction', () => {
        params = [{
            name: 'fractions',
            value: ['Resistance']
        }];

        params = charactersFiltration.setFractions(params, ['Ewok']);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Ewok']
            }]
        );
    });

    test('if exists two another fractions', () => {
        params = [{
            name: 'fractions',
            value: ['Phoenix', 'Geonosian']
        }];

        params = charactersFiltration.setFractions(params, ['Jawa', 'Bad Batch']);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jawa', 'Bad Batch']
            }]
        );
    });
});

describe('charactersFiltration.setFractions() sets fractions param correctly to params with other params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if exists one other param', () => {
        params = [{
            name: 'features',
            value: ['fleetCommander', 'galacticLegend']
        }];

        params = charactersFiltration.setFractions(params, ['Jedi']);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['fleetCommander', 'galacticLegend']
            }, {
                name: 'fractions',
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

        params = charactersFiltration.setFractions(params, ['First Order', 'Mandalorian', 'Rogue One']);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['fleetCommander', 'galacticLegend']
            }, {
                name: 'alignment',
                value: 'dark'
            }, {
                name: 'fractions',
                value: ['First Order', 'Mandalorian', 'Rogue One']
            }]
        );
    });

    test('if exists few other params and one fractions param', () => {
        params = [{
            name: 'features',
            value: ['fleetCommander', 'galacticLegend']
        }, {
            name: 'alignment',
            value: 'dark'
        }, {
            name: 'fractions',
            value: ['Jedi']
        }, {
            name: 'role',
            value: ['support']
        }];

        params = charactersFiltration.setFractions(params, ['Rebel Fighter']);

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
                name: 'fractions',
                value: ['Rebel Fighter']
            }]
        );
    });
});
