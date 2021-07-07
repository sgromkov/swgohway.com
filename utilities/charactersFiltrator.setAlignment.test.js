import charactersFiltration from './charactersFiltration';

let params = [];

const clearParams = function () {
    params = [];
}

describe('charactersFiltration.setAlignment() does not set alignment param to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setAlignment(params);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setAlignment(params, '');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setAlignment(params, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        params = charactersFiltration.setAlignment(params, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setAlignment(params, []);

        expect(params).toEqual([]);
    });

    test('if passed array with values', () => {
        params = charactersFiltration.setAlignment(params, ['light']);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        params = charactersFiltration.setAlignment(params, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        params = charactersFiltration.setAlignment(params, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setAlignment(params, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setAlignment(params, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setAlignment(params, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setAlignment(params, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltration.setAlignment() does not set alignment param to prefilled params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'role',
            value: ['attacker']
        }];
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setAlignment(params);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setAlignment(params, '');

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setAlignment(params, undefined);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed null', () => {
        params = charactersFiltration.setAlignment(params, null);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setAlignment(params, []);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed array with values', () => {
        params = charactersFiltration.setAlignment(params, ['light']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed function', () => {
        params = charactersFiltration.setAlignment(params, () => { });

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed number', () => {
        params = charactersFiltration.setAlignment(params, 10);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setAlignment(params, true);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setAlignment(params, false);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setAlignment(params, {});

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setAlignment(params, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });
});

describe('charactersFiltration.setAlignment() removes alignment param from params with alignment only', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'alignment',
            value: 'light'
        }];
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setAlignment(params);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setAlignment(params, '');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setAlignment(params, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        params = charactersFiltration.setAlignment(params, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setAlignment(params, []);

        expect(params).toEqual([]);
    });

    test('if passed array with values', () => {
        params = charactersFiltration.setAlignment(params, ['light']);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        params = charactersFiltration.setAlignment(params, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        params = charactersFiltration.setAlignment(params, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setAlignment(params, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setAlignment(params, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setAlignment(params, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setAlignment(params, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltration.setAlignment() removes alignment param from params with different params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'alignment',
            value: 'light'
        }, {
            name: 'factions',
            value: ['Jedi', 'Old Republic']
        }];
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setAlignment(params);

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setAlignment(params, '');

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setAlignment(params, undefined);

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed null', () => {
        params = charactersFiltration.setAlignment(params, null);

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setAlignment(params, []);

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed array with values', () => {
        params = charactersFiltration.setAlignment(params, ['light']);

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed function', () => {
        params = charactersFiltration.setAlignment(params, () => { });

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed number', () => {
        params = charactersFiltration.setAlignment(params, 10);

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setAlignment(params, true);

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setAlignment(params, false);

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setAlignment(params, {});

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setAlignment(params, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'factions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });
});

describe('charactersFiltration.setAlignment() sets alignment param correctly to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed string "light"', () => {
        params = charactersFiltration.setAlignment(params, 'light');

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed string "dark"', () => {
        params = charactersFiltration.setAlignment(params, 'dark');

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'dark'
            }]
        );
    });
});

describe('charactersFiltration.setAlignment() sets alignment param correctly to prefilled params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed string "light"', () => {
        params = [{
            name: 'features',
            value: ['fleetCommender', 'galacticLegend']
        }];

        params = charactersFiltration.setAlignment(params, 'dark');

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['fleetCommender', 'galacticLegend']
            }, {
                name: 'alignment',
                value: 'dark'
            }]
        );
    });

    test('if passed string "dark"', () => {
        params = [{
            name: 'role',
            value: ['attacker']
        }];

        params = charactersFiltration.setAlignment(params, 'dark');

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }, {
                name: 'alignment',
                value: 'dark'
            }]
        );
    });
});
