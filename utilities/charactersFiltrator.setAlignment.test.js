import charactersFiltrator from './charactersFiltrator';

let params = [];

const clearParams = function () {
    params = [];
}

const setParams = function (callback) {
    params = callback(params);
};

describe('charactersFiltrator.setAlignment() does not set alignment param to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed nothing', () => {
        charactersFiltrator.setAlignment(setParams);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        charactersFiltrator.setAlignment(setParams, '');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        charactersFiltrator.setAlignment(setParams, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        charactersFiltrator.setAlignment(setParams, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        charactersFiltrator.setAlignment(setParams, []);

        expect(params).toEqual([]);
    });

    test('if passed array with values', () => {
        charactersFiltrator.setAlignment(setParams, ['light']);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        charactersFiltrator.setAlignment(setParams, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        charactersFiltrator.setAlignment(setParams, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setAlignment(setParams, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setAlignment(setParams, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        charactersFiltrator.setAlignment(setParams, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        charactersFiltrator.setAlignment(setParams, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltrator.setAlignment() does not set alignment param to prefilled params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'role',
            value: ['attacker']
        }];
    });

    test('if passed nothing', () => {
        charactersFiltrator.setAlignment(setParams);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed empty string', () => {
        charactersFiltrator.setAlignment(setParams, '');

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed undefined', () => {
        charactersFiltrator.setAlignment(setParams, undefined);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed null', () => {
        charactersFiltrator.setAlignment(setParams, null);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed empty array', () => {
        charactersFiltrator.setAlignment(setParams, []);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed array with values', () => {
        charactersFiltrator.setAlignment(setParams, ['light']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed function', () => {
        charactersFiltrator.setAlignment(setParams, () => { });

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed number', () => {
        charactersFiltrator.setAlignment(setParams, 10);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setAlignment(setParams, true);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setAlignment(setParams, false);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed empty object', () => {
        charactersFiltrator.setAlignment(setParams, {});

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed object with data', () => {
        charactersFiltrator.setAlignment(setParams, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });
});

describe('charactersFiltrator.setAlignment() removes alignment param from params with alignment only', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'alignment',
            value: 'light'
        }];
    });

    test('if passed nothing', () => {
        charactersFiltrator.setAlignment(setParams);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        charactersFiltrator.setAlignment(setParams, '');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        charactersFiltrator.setAlignment(setParams, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        charactersFiltrator.setAlignment(setParams, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        charactersFiltrator.setAlignment(setParams, []);

        expect(params).toEqual([]);
    });

    test('if passed array with values', () => {
        charactersFiltrator.setAlignment(setParams, ['light']);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        charactersFiltrator.setAlignment(setParams, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        charactersFiltrator.setAlignment(setParams, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setAlignment(setParams, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setAlignment(setParams, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        charactersFiltrator.setAlignment(setParams, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        charactersFiltrator.setAlignment(setParams, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltrator.setAlignment() removes alignment param from params with different params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'alignment',
            value: 'light'
        }, {
            name: 'fractions',
            value: ['Jedi', 'Old Republic']
        }];
    });

    test('if passed nothing', () => {
        charactersFiltrator.setAlignment(setParams);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed empty string', () => {
        charactersFiltrator.setAlignment(setParams, '');

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed undefined', () => {
        charactersFiltrator.setAlignment(setParams, undefined);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed null', () => {
        charactersFiltrator.setAlignment(setParams, null);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed empty array', () => {
        charactersFiltrator.setAlignment(setParams, []);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed array with values', () => {
        charactersFiltrator.setAlignment(setParams, ['light']);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed function', () => {
        charactersFiltrator.setAlignment(setParams, () => { });

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed number', () => {
        charactersFiltrator.setAlignment(setParams, 10);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setAlignment(setParams, true);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setAlignment(setParams, false);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed empty object', () => {
        charactersFiltrator.setAlignment(setParams, {});

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed object with data', () => {
        charactersFiltrator.setAlignment(setParams, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });
});

describe('charactersFiltrator.setAlignment() sets alignment param correctly to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed string "light"', () => {
        charactersFiltrator.setAlignment(setParams, 'light');

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed string "dark"', () => {
        charactersFiltrator.setAlignment(setParams, 'dark');

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'dark'
            }]
        );
    });
});

describe('charactersFiltrator.setAlignment() sets alignment param correctly to prefilled params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed string "light"', () => {
        params = [{
            name: 'features',
            value: ['fleetCommender', 'galacticLegend']
        }];

        charactersFiltrator.setAlignment(setParams, 'dark');

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

        charactersFiltrator.setAlignment(setParams, 'dark');

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
