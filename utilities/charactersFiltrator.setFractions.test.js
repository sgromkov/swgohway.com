import charactersFiltrator from './charactersFiltrator';

let params = [];

const clearParams = function () {
    params = [];
}

const setParams = function (callback) {
    params = callback(params);
};

describe('charactersFiltrator.setFractions() does not set fractions param to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed nothing', () => {
        charactersFiltrator.setFractions(setParams);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        charactersFiltrator.setFractions(setParams, '');

        expect(params).toEqual([]);
    });

    test('if passed string with value', () => {
        charactersFiltrator.setFractions(setParams, 'tank');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        charactersFiltrator.setFractions(setParams, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        charactersFiltrator.setFractions(setParams, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        charactersFiltrator.setFractions(setParams, []);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        charactersFiltrator.setFractions(setParams, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        charactersFiltrator.setFractions(setParams, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setFractions(setParams, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setFractions(setParams, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        charactersFiltrator.setFractions(setParams, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        charactersFiltrator.setFractions(setParams, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltrator.setFractions() does not set fractions param to prefilled params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'features',
            value: ['GalacticLegend']
        }];
    });

    test('if passed nothing', () => {
        charactersFiltrator.setFractions(setParams);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty string', () => {
        charactersFiltrator.setFractions(setParams, '');

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed undefined', () => {
        charactersFiltrator.setFractions(setParams, undefined);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed null', () => {
        charactersFiltrator.setFractions(setParams, null);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty array', () => {
        charactersFiltrator.setFractions(setParams, []);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed function', () => {
        charactersFiltrator.setFractions(setParams, () => { });

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed number', () => {
        charactersFiltrator.setFractions(setParams, 10);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setFractions(setParams, true);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setFractions(setParams, false);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty object', () => {
        charactersFiltrator.setFractions(setParams, {});

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed object with data', () => {
        charactersFiltrator.setFractions(setParams, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });
});

describe('charactersFiltrator.setFractions() removes fractions param from params with fractions only', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'fractions',
            value: ['Jedi', 'Sith']
        }];
    });

    test('if passed nothing', () => {
        charactersFiltrator.setFractions(setParams);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        charactersFiltrator.setFractions(setParams, '');

        expect(params).toEqual([]);
    });

    test('if passed string with value', () => {
        charactersFiltrator.setFractions(setParams, 'tank');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        charactersFiltrator.setFractions(setParams, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        charactersFiltrator.setFractions(setParams, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        charactersFiltrator.setFractions(setParams, []);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        charactersFiltrator.setFractions(setParams, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        charactersFiltrator.setFractions(setParams, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setFractions(setParams, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setFractions(setParams, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        charactersFiltrator.setFractions(setParams, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        charactersFiltrator.setFractions(setParams, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltrator.setFractions() removes fractions param from params with different params', () => {
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
        charactersFiltrator.setFractions(setParams);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty string', () => {
        charactersFiltrator.setFractions(setParams, '');

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed string with value', () => {
        charactersFiltrator.setFractions(setParams, 'healer');

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed undefined', () => {
        charactersFiltrator.setFractions(setParams, undefined);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed null', () => {
        charactersFiltrator.setFractions(setParams, null);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty array', () => {
        charactersFiltrator.setFractions(setParams, []);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed function', () => {
        charactersFiltrator.setFractions(setParams, () => { });

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed number', () => {
        charactersFiltrator.setFractions(setParams, 10);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setFractions(setParams, true);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setFractions(setParams, false);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty object', () => {
        charactersFiltrator.setFractions(setParams, {});

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed object with data', () => {
        charactersFiltrator.setFractions(setParams, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });
});

describe('charactersFiltrator.setFractions() sets fractions param correctly to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed value ["Bounty Hunter"]', () => {
        charactersFiltrator.setFractions(setParams, ['Bounty Hunter']);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Bounty Hunter']
            }]
        );
    });

    test('if passed values ["Separatist", "Droid"]', () => {
        charactersFiltrator.setFractions(setParams, ['Separatist', 'Droid']);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Separatist', 'Droid']
            }]
        );
    });

    test('if passed value ["501st", "Clone Trooper", "Empire"]', () => {
        charactersFiltrator.setFractions(setParams, ['501st', 'Clone Trooper', 'Empire']);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['501st', 'Clone Trooper', 'Empire']
            }]
        );
    });
});

describe('charactersFiltrator.setFractions() sets fractions param correctly to params with existed fraction', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if exists one another fraction', () => {
        params = [{
            name: 'fractions',
            value: ['Resistance']
        }];

        charactersFiltrator.setFractions(setParams, ['Ewok']);

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

        charactersFiltrator.setFractions(setParams, ['Jawa', 'Bad Batch']);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jawa', 'Bad Batch']
            }]
        );
    });
});

describe('charactersFiltrator.setFractions() sets fractions param correctly to params with other params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if exists one other param', () => {
        params = [{
            name: 'features',
            value: ['fleetCommander', 'galacticLegend']
        }];

        charactersFiltrator.setFractions(setParams, ['Jedi']);

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

        charactersFiltrator.setFractions(setParams, ['First Order', 'Mandalorian', 'Rogue One']);

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

        charactersFiltrator.setFractions(setParams, ['Rebel Fighter']);

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
