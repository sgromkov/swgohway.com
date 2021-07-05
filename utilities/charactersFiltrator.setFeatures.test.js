import charactersFiltration from './charactersFiltration';

let params = [];

const clearParams = function () {
    params = [];
}

describe('charactersFiltration.setFeatures() does not set features param to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setFeatures(params);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setFeatures(params, '');

        expect(params).toEqual([]);
    });

    test('if passed string with value', () => {
        params = charactersFiltration.setFeatures(params, 'tank');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setFeatures(params, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        params = charactersFiltration.setFeatures(params, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setFeatures(params, []);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        params = charactersFiltration.setFeatures(params, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        params = charactersFiltration.setFeatures(params, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setFeatures(params, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setFeatures(params, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setFeatures(params, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setFeatures(params, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltration.setFeatures() does not set features param to prefilled params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'alignment',
            value: 'light'
        }];
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setFeatures(params);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setFeatures(params, '');

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setFeatures(params, undefined);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed null', () => {
        params = charactersFiltration.setFeatures(params, null);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setFeatures(params, []);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed function', () => {
        params = charactersFiltration.setFeatures(params, () => { });

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed number', () => {
        params = charactersFiltration.setFeatures(params, 10);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setFeatures(params, true);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setFeatures(params, false);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setFeatures(params, {});

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setFeatures(params, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });
});

describe('charactersFiltration.setFeatures() removes features param from params with features only', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'leader',
            value: true
        }, {
            name: 'galacticLegend',
            value: true
        }, {
            name: 'fleetCommander',
            value: true
        }];
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setFeatures(params);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setFeatures(params, '');

        expect(params).toEqual([]);
    });

    test('if passed string with value', () => {
        params = charactersFiltration.setFeatures(params, 'tank');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setFeatures(params, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        params = charactersFiltration.setFeatures(params, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setFeatures(params, []);

        expect(params).toEqual([]);
    });

    test('if passed array with value', () => {
        params = charactersFiltration.setFeatures(params, ['light']);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        params = charactersFiltration.setFeatures(params, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        params = charactersFiltration.setFeatures(params, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setFeatures(params, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setFeatures(params, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setFeatures(params, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setFeatures(params, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltration.setFeatures() removes features param from params with different params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'role',
            value: ['attacker', 'tank']
        }, {
            name: 'leader',
            value: true
        }];
    });

    test('if passed nothing', () => {
        params = charactersFiltration.setFeatures(params);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty string', () => {
        params = charactersFiltration.setFeatures(params, '');

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed string with value', () => {
        params = charactersFiltration.setFeatures(params, 'healer');

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed undefined', () => {
        params = charactersFiltration.setFeatures(params, undefined);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed null', () => {
        params = charactersFiltration.setFeatures(params, null);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty array', () => {
        params = charactersFiltration.setFeatures(params, []);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed function', () => {
        params = charactersFiltration.setFeatures(params, () => { });

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed number', () => {
        params = charactersFiltration.setFeatures(params, 10);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed boolean true', () => {
        params = charactersFiltration.setFeatures(params, true);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed boolean false', () => {
        params = charactersFiltration.setFeatures(params, false);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty object', () => {
        params = charactersFiltration.setFeatures(params, {});

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed object with data', () => {
        params = charactersFiltration.setFeatures(params, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });
});

describe('charactersFiltration.setFeatures() sets features param correctly to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed value ["leader"]', () => {
        params = charactersFiltration.setFeatures(params, ['leader']);

        expect(params).toMatchObject(
            [{
                name: 'leader',
                value: true
            }]
        );
    });

    test('if passed values ["galacticLegend", "leader"]', () => {
        params = charactersFiltration.setFeatures(params, ['galacticLegend', 'leader']);

        expect(params).toMatchObject(
            [{
                name: 'galacticLegend',
                value: true
            }, {
                name: 'leader',
                value: true
            }]
        );
    });

    test('if passed value ["galacticLegend", "fleetCommander", "leader"]', () => {
        params = charactersFiltration.setFeatures(params, ['galacticLegend', 'fleetCommander', 'leader']);

        expect(params).toMatchObject(
            [{
                name: 'galacticLegend',
                value: true
            }, {
                name: 'fleetCommander',
                value: true
            }, {
                name: 'leader',
                value: true
            }]
        );
    });
});

describe('charactersFiltration.setFeatures() sets features param correctly to params with existed feature', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if exists one another feature', () => {
        params = [{
            name: 'leader',
            value: true
        }];

        params = charactersFiltration.setFeatures(params, ['leader', 'galacticLegend']);

        expect(params).toMatchObject(
            [{
                name: 'leader',
                value: true
            }, {
                name: 'galacticLegend',
                value: true
            }]
        );
    });

    test('if exists two another features', () => {
        params = [{
            name: 'leader',
            value: true
        }, {
            name: 'galacticLegend',
            value: true
        }];

        params = charactersFiltration.setFeatures(params, ['fleetCommander']);

        expect(params).toMatchObject(
            [{
                name: 'fleetCommander',
                value: true
            }]
        );
    });
});

describe('charactersFiltration.setFeatures() sets features param correctly to params with other params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if exists one other param', () => {
        params = [{
            name: 'role',
            value: ['attacker', 'tank']
        }];

        params = charactersFiltration.setFeatures(params, ['fleetCommander', 'galacticLegend']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']

            }, {
                name: 'fleetCommander',
                value: true
            }, {
                name: 'galacticLegend',
                value: true
            }]
        );
    });

    test('if exists two other params', () => {
        params = [{
            name: 'role',
            value: ['attacker', 'tank']
        }, {
            name: 'alignment',
            value: 'dark'
        }];

        params = charactersFiltration.setFeatures(params, ['fleetCommander']);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }, {
                name: 'alignment',
                value: 'dark'
            }, {
                name: 'fleetCommander',
                value: true
            }]
        );
    });

    test('if exists few other params and one feature param', () => {
        params = [{
            name: 'fleetCommander',
            value: true
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

        params = charactersFiltration.setFeatures(params, ['fleetCommander', 'galacticLegend']);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'dark'
            }, {
                name: 'fractions',
                value: ['Jedi']
            }, {
                name: 'role',
                value: ['support']
            }, {
                name: 'fleetCommander',
                value: true
            }, {
                name: 'galacticLegend',
                value: true
            }]
        );
    });
});
