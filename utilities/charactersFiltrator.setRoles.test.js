import charactersFiltration from './charactersFiltration';

let params = [];

const clearParams = function () {
    params = [];
}

describe('charactersFiltration.setRoles() does not set role param to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setRoles(params);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setRoles(params, '');

        expect(params).toEqual([]);
    });

    test('if passed string with value', () => {
        params = charactersFiltration.setRoles(params, 'tank');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setRoles(params, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        params = charactersFiltration.setRoles(params, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setRoles(params, []);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        params = charactersFiltration.setRoles(params, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        params = charactersFiltration.setRoles(params, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setRoles(params, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setRoles(params, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setRoles(params, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setRoles(params, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltration.setRoles() does not set role param to prefilled params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'features',
            value: ['GalacticLegend']
        }];
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setRoles(params);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setRoles(params, '');

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setRoles(params, undefined);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed null', () => {
        params = charactersFiltration.setRoles(params, null);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setRoles(params, []);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed function', () => {
        params = charactersFiltration.setRoles(params, () => { });

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed number', () => {
        params = charactersFiltration.setRoles(params, 10);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setRoles(params, true);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setRoles(params, false);

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setRoles(params, {});

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setRoles(params, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'features',
                value: ['GalacticLegend']
            }]
        );
    });
});

describe('charactersFiltration.setRoles() removes role param from params with roles only', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'role',
            value: ['attacker']
        }];
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setRoles(params);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setRoles(params, '');

        expect(params).toEqual([]);
    });

    test('if passed string with value', () => {
        params = charactersFiltration.setRoles(params, 'tank');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setRoles(params, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        params = charactersFiltration.setRoles(params, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setRoles(params, []);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        params = charactersFiltration.setRoles(params, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        params = charactersFiltration.setRoles(params, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setRoles(params, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setRoles(params, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setRoles(params, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setRoles(params, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltration.setRoles() removes role param from params with different params', () => {
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
        params = charactersFiltration.setRoles(params);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setRoles(params, '');

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed string with value', () => {
        params = charactersFiltration.setRoles(params, 'healer');

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setRoles(params, undefined);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed null', () => {
        params = charactersFiltration.setRoles(params, null);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setRoles(params, []);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed function', () => {
        params = charactersFiltration.setRoles(params, () => { });

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed number', () => {
        params = charactersFiltration.setRoles(params, 10);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setRoles(params, true);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setRoles(params, false);

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setRoles(params, {});

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setRoles(params, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'fractions',
                value: ['Jedi', 'Old Republic']
            }]
        );
    });
});

describe('charactersFiltration.setRoles() sets role param correctly to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed value ["attacker"]', () => {
        params = charactersFiltration.setRoles(params, ['attacker']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker']
            }]
        );
    });

    test('if passed value ["tank"]', () => {
        params = charactersFiltration.setRoles(params, ['tank']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['tank']
            }]
        );
    });

    test('if passed value ["support"]', () => {
        params = charactersFiltration.setRoles(params, ['support']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['support']
            }]
        );
    });

    test('if passed value ["healer"]', () => {
        params = charactersFiltration.setRoles(params, ['healer']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['healer']
            }]
        );
    });
});

describe('charactersFiltration.setRoles() sets role param correctly to params with existed role', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if exists one another role', () => {
        params = [{
            name: 'role',
            value: ['healer']
        }];

        params = charactersFiltration.setRoles(params, ['attacker']);

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

        params = charactersFiltration.setRoles(params, ['attacker', 'support']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'support']
            }]
        );
    });
});

describe('charactersFiltration.setRoles() sets role param correctly to params with other params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if exists one other param', () => {
        params = [{
            name: 'features',
            value: ['fleetCommander', 'galacticLegend']
        }];

        params = charactersFiltration.setRoles(params, ['tank']);

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

        params = charactersFiltration.setRoles(params, ['healer']);

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

        params = charactersFiltration.setRoles(params, ['attacker', 'tank']);

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
