import charactersFiltrator from './charactersFiltrator';

let params = [];

const clearParams = function () {
    params = [];
}

const setParams = function (callback) {
    params = callback(params);
};

describe('charactersFiltrator.setRoles() does not set role param to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed nothing', () => {
        charactersFiltrator.setRoles(setParams);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        charactersFiltrator.setRoles(setParams, '');

        expect(params).toEqual([]);
    });

    test('if passed string with value', () => {
        charactersFiltrator.setRoles(setParams, 'tank');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        charactersFiltrator.setRoles(setParams, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        charactersFiltrator.setRoles(setParams, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        charactersFiltrator.setRoles(setParams, []);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        charactersFiltrator.setRoles(setParams, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        charactersFiltrator.setRoles(setParams, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setRoles(setParams, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setRoles(setParams, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        charactersFiltrator.setRoles(setParams, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        charactersFiltrator.setRoles(setParams, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltrator.setRoles() does not set role param to prefilled params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'features',
            value: ['GalacticLegend']
        }];
    });

    test('if passed nothing', () => {
        charactersFiltrator.setRoles(setParams);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty string', () => {
        charactersFiltrator.setRoles(setParams, '');

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed undefined', () => {
        charactersFiltrator.setRoles(setParams, undefined);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed null', () => {
        charactersFiltrator.setRoles(setParams, null);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty array', () => {
        charactersFiltrator.setRoles(setParams, []);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed function', () => {
        charactersFiltrator.setRoles(setParams, () => { });

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed number', () => {
        charactersFiltrator.setRoles(setParams, 10);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setRoles(setParams, true);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setRoles(setParams, false);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty object', () => {
        charactersFiltrator.setRoles(setParams, {});

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed object with data', () => {
        charactersFiltrator.setRoles(setParams, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });
});

describe('charactersFiltrator.setRoles() removes role param from params with roles only', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'role',
            value: ['attacker']
        }];
    });

    test('if passed nothing', () => {
        charactersFiltrator.setRoles(setParams);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        charactersFiltrator.setRoles(setParams, '');

        expect(params).toEqual([]);
    });

    test('if passed string with value', () => {
        charactersFiltrator.setRoles(setParams, 'tank');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        charactersFiltrator.setRoles(setParams, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        charactersFiltrator.setRoles(setParams, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        charactersFiltrator.setRoles(setParams, []);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        charactersFiltrator.setRoles(setParams, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        charactersFiltrator.setRoles(setParams, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setRoles(setParams, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setRoles(setParams, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        charactersFiltrator.setRoles(setParams, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        charactersFiltrator.setRoles(setParams, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltrator.setRoles() removes role param from params with different params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'role',
            value: ['attacker', 'tank']
        }, {
            name: 'fractions',
            value: ['Jedi', 'Old Republic']
        }];
    });

    test('if passed nothing', () => {
        charactersFiltrator.setRoles(setParams);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed empty string', () => {
        charactersFiltrator.setRoles(setParams, '');

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed string with value', () => {
        charactersFiltrator.setRoles(setParams, 'healer');

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed undefined', () => {
        charactersFiltrator.setRoles(setParams, undefined);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed null', () => {
        charactersFiltrator.setRoles(setParams, null);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed empty array', () => {
        charactersFiltrator.setRoles(setParams, []);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed function', () => {
        charactersFiltrator.setRoles(setParams, () => { });

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed number', () => {
        charactersFiltrator.setRoles(setParams, 10);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setRoles(setParams, true);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setRoles(setParams, false);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed empty object', () => {
        charactersFiltrator.setRoles(setParams, {});

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed object with data', () => {
        charactersFiltrator.setRoles(setParams, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });
});

describe('charactersFiltrator.setRoles() sets role param correctly to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed value ["attacker"]', () => {
        charactersFiltrator.setRoles(setParams, ['attacker']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed value ["tank"]', () => {
        charactersFiltrator.setRoles(setParams, ['tank']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['tank']
            }]
        );
    });

    test('if passed value ["support"]', () => {
        charactersFiltrator.setRoles(setParams, ['support']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['support']
            }]
        );
    });

    test('if passed value ["healer"]', () => {
        charactersFiltrator.setRoles(setParams, ['healer']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['healer']
            }]
        );
    });
});

describe('charactersFiltrator.setRoles() sets role param correctly to params with existed role', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if exists one another role', () => {
        params = [{
            name: 'role',
            value: ['healer']
        }];

        charactersFiltrator.setRoles(setParams, ['attacker']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if exists two another roles', () => {
        params = [{
            name: 'role',
            value: ['healer', 'tank']
        }];

        charactersFiltrator.setRoles(setParams, ['attacker', 'support']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'support']
            }]
        );
    });
});

describe('charactersFiltrator.setRoles() sets role param correctly to params with other params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if exists one other param', () => {
        params = [{
            name: 'features',
            value: ['fleetCommander', 'galacticLegend']
        }];

        charactersFiltrator.setRoles(setParams, ['tank']);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['fleetCommander', 'galacticLegend']
            }, {
                name: 'role',
                value: ['tank']
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

        charactersFiltrator.setRoles(setParams, ['healer']);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['fleetCommander', 'galacticLegend']
            }, {
                name: 'alignment',
                value: 'dark'
            }, {
                name: 'role',
                value: ['healer']
            }]
        );
    });

    test('if exists few other params and one role param', () => {
        params = [{
            name: 'features',
            value: ['fleetCommander', 'galacticLegend']
        }, {
            name: 'alignment',
            value: 'dark'
        }, {
            name: 'fractions',
            value: ['Jedi', 'Old Republic']
        }, {
            name: 'role',
            value: ['support']
        }];

        charactersFiltrator.setRoles(setParams, ['attacker', 'tank']);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['fleetCommander', 'galacticLegend']
            }, {
                name: 'alignment',
                value: 'dark'
            }, {
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }, {
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });
});
