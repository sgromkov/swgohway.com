import charactersFiltrator from './charactersFiltrator';

let params = [];

const clearParams = function () {
    params = [];
}

const setParams = function (callback) {
    params = callback(params);
};

describe('charactersFiltrator.setFeatures() does not set features param to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed nothing', () => {
        charactersFiltrator.setFeatures(setParams);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        charactersFiltrator.setFeatures(setParams, '');

        expect(params).toEqual([]);
    });

    test('if passed string with value', () => {
        charactersFiltrator.setFeatures(setParams, 'tank');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        charactersFiltrator.setFeatures(setParams, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        charactersFiltrator.setFeatures(setParams, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        charactersFiltrator.setFeatures(setParams, []);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        charactersFiltrator.setFeatures(setParams, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        charactersFiltrator.setFeatures(setParams, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setFeatures(setParams, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setFeatures(setParams, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        charactersFiltrator.setFeatures(setParams, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        charactersFiltrator.setFeatures(setParams, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltrator.setFeatures() does not set features param to prefilled params', () => {
    beforeEach(() => {
        clearParams();

        params = [{
            name: 'alignment',
            value: 'light'
        }];
    });

    test('if passed nothing', () => {
        charactersFiltrator.setFeatures(setParams);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed empty string', () => {
        charactersFiltrator.setFeatures(setParams, '');

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed undefined', () => {
        charactersFiltrator.setFeatures(setParams, undefined);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed null', () => {
        charactersFiltrator.setFeatures(setParams, null);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed empty array', () => {
        charactersFiltrator.setFeatures(setParams, []);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed function', () => {
        charactersFiltrator.setFeatures(setParams, () => { });

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed number', () => {
        charactersFiltrator.setFeatures(setParams, 10);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setFeatures(setParams, true);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setFeatures(setParams, false);

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed empty object', () => {
        charactersFiltrator.setFeatures(setParams, {});

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });

    test('if passed object with data', () => {
        charactersFiltrator.setFeatures(setParams, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'alignment',
                value: 'light'
            }]
        );
    });
});

describe('charactersFiltrator.setFeatures() removes features param from params with features only', () => {
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
        charactersFiltrator.setFeatures(setParams);

        expect(params).toEqual([]);
    });

    test('if passed empty string', () => {
        charactersFiltrator.setFeatures(setParams, '');

        expect(params).toEqual([]);
    });

    test('if passed string with value', () => {
        charactersFiltrator.setFeatures(setParams, 'tank');

        expect(params).toEqual([]);
    });

    test('if passed undefined', () => {
        charactersFiltrator.setFeatures(setParams, undefined);

        expect(params).toEqual([]);
    });

    test('if passed null', () => {
        charactersFiltrator.setFeatures(setParams, null);

        expect(params).toEqual([]);
    });

    test('if passed empty array', () => {
        charactersFiltrator.setFeatures(setParams, []);

        expect(params).toEqual([]);
    });

    test('if passed array with value', () => {
        charactersFiltrator.setFeatures(setParams, ['light']);

        expect(params).toEqual([]);
    });

    test('if passed function', () => {
        charactersFiltrator.setFeatures(setParams, () => { });

        expect(params).toEqual([]);
    });

    test('if passed number', () => {
        charactersFiltrator.setFeatures(setParams, 10);

        expect(params).toEqual([]);
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setFeatures(setParams, true);

        expect(params).toEqual([]);
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setFeatures(setParams, false);

        expect(params).toEqual([]);
    });

    test('if passed empty object', () => {
        charactersFiltrator.setFeatures(setParams, {});

        expect(params).toEqual([]);
    });

    test('if passed object with data', () => {
        charactersFiltrator.setFeatures(setParams, { code: 'light' });

        expect(params).toEqual([]);
    });
});

describe('charactersFiltrator.setFeatures() removes features param from params with different params', () => {
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
        charactersFiltrator.setFeatures(setParams);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty string', () => {
        charactersFiltrator.setFeatures(setParams, '');

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed string with value', () => {
        charactersFiltrator.setFeatures(setParams, 'healer');

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed undefined', () => {
        charactersFiltrator.setFeatures(setParams, undefined);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed null', () => {
        charactersFiltrator.setFeatures(setParams, null);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty array', () => {
        charactersFiltrator.setFeatures(setParams, []);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed function', () => {
        charactersFiltrator.setFeatures(setParams, () => { });

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed number', () => {
        charactersFiltrator.setFeatures(setParams, 10);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed boolean true', () => {
        charactersFiltrator.setFeatures(setParams, true);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed boolean false', () => {
        charactersFiltrator.setFeatures(setParams, false);

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed empty object', () => {
        charactersFiltrator.setFeatures(setParams, {});

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });

    test('if passed object with data', () => {
        charactersFiltrator.setFeatures(setParams, { code: 'light' });

        expect(params).toMatchObject(
            [{
                name: 'role',
                value: ['attacker', 'tank']
            }]
        );
    });
});

describe('charactersFiltrator.setFeatures() sets features param correctly to empty params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if passed value ["leader"]', () => {
        charactersFiltrator.setFeatures(setParams, ['leader']);

        expect(params).toMatchObject(
            [{
                name: 'leader',
                value: true
            }]
        );
    });

    test('if passed values ["galacticLegend", "leader"]', () => {
        charactersFiltrator.setFeatures(setParams, ['galacticLegend', 'leader']);

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
        charactersFiltrator.setFeatures(setParams, ['galacticLegend', 'fleetCommander', 'leader']);

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

describe('charactersFiltrator.setFeatures() sets features param correctly to params with existed feature', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if exists one another feature', () => {
        params = [{
            name: 'leader',
            value: true
        }];

        charactersFiltrator.setFeatures(setParams, ['leader', 'galacticLegend']);

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

        charactersFiltrator.setFeatures(setParams, ['fleetCommander']);

        expect(params).toMatchObject(
            [{
                name: 'fleetCommander',
                value: true
            }]
        );
    });
});

describe('charactersFiltrator.setFeatures() sets features param correctly to params with other params', () => {
    beforeEach(() => {
        clearParams();
    });

    test('if exists one other param', () => {
        params = [{
            name: 'role',
            value: ['attacker', 'tank']
        }];

        charactersFiltrator.setFeatures(setParams, ['fleetCommander', 'galacticLegend']);

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

        charactersFiltrator.setFeatures(setParams, ['fleetCommander']);

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

        charactersFiltrator.setFeatures(setParams, ['fleetCommander', 'galacticLegend']);

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
