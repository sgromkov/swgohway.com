import { Logic } from "../types";

const ALIGNMENT = 'alignment';
const ROLE = 'role';
const FACTIONS = 'factions';
const FEATURES = 'features';
const CARGO_SHIP = 'cargoShip';

const shipFiltration = {
    setAlignment: function (params, alignmentCode) {
        const newParams = params.filter((param) => param.name !== ALIGNMENT);

        if (typeof alignmentCode === 'string' && alignmentCode) {
            newParams.push({
                name: ALIGNMENT,
                value: alignmentCode
            });
        }

        return newParams;
    },

    setRoles: function (params, roleCodes) {
        const newParams = params.filter((param) => param.name !== ROLE);

        if (Array.isArray(roleCodes) && roleCodes.length > 0) {
            newParams.push({
                name: ROLE,
                value: roleCodes,
                logic: 'or'
            });
        }

        return newParams;
    },

    setFactions: function (params, factionCodes, logic) {
        const newParams = params.filter((param) => param.name !== FACTIONS);

        if (Array.isArray(factionCodes) && factionCodes.length > 0) {
            newParams.push({
                name: FACTIONS,
                value: factionCodes,
                logic
            });
        }

        return newParams;
    },

    setFeatures: function (params, featureCodes) {
        const PARAM_NAMES = [
            CARGO_SHIP,
        ];

        const newParams = params.filter((param) => PARAM_NAMES.indexOf(param.name) === -1);

        if (Array.isArray(featureCodes) && featureCodes.length > 0) {
            featureCodes.forEach((featureCode) => {
                if (PARAM_NAMES.indexOf(featureCode) > -1) {
                    newParams.push({
                        name: featureCode,
                        value: true
                    });
                }
            });
        }

        return newParams;
    },

    getFilteredShips: function (ships, params) {
        if (params.length === 0) {
            return ships;
        }

        return ships.filter((ship) => {
            const matchedParams = [];

            params.forEach((param) => {
                let isMatched = false;

                switch (param.name) {
                    case ALIGNMENT:
                        isMatched = ship.alignment.code === param.value;
                        break;
                    case ROLE:
                        isMatched = param.value.indexOf(ship.role.code) > -1;
                        break;
                    case FACTIONS:
                        const foundFactions = [];

                        param.value.forEach((seekingValue) => {
                            ship.factions.forEach((faction) => {
                                if (faction.code === seekingValue) {
                                    foundFactions.push(seekingValue);
                                }
                            });
                        });

                        if (foundFactions.length === 0) {
                            isMatched = false;
                        } else if (param.logic === 'or') {
                            isMatched = true;
                        } else {
                            isMatched = foundFactions.length === param.value.length;
                        }

                        break;
                    case CARGO_SHIP:
                        isMatched = !!(ship.cargoShip);
                        break;
                }

                if (isMatched) {
                    matchedParams.push(param.name);
                }
            });

            let allParamsMatched = true;

            params.forEach((param) => {
                if (matchedParams.indexOf(param.name) === -1) {
                    allParamsMatched = false;
                }
            });

            return allParamsMatched;
        });
    },

    getActiveValuesByParamName: function(params, seekingParamName) {
        let activeValues = [];

        if (params.length === 0) {
            return activeValues;
        }

        params.forEach((param) => {
            switch (param.name) {
                case ALIGNMENT:
                    if (seekingParamName === ALIGNMENT) {
                        activeValues.push(param.value);
                    }
                    break;
                case ROLE:
                    if (seekingParamName === ROLE) {
                        activeValues = [...param.value];
                    }
                    break;
                case FACTIONS:
                    if (seekingParamName === FACTIONS) {
                        activeValues = [...param.value];
                    }
                    break;
                case CARGO_SHIP:
                    if (seekingParamName === FEATURES) {
                        activeValues.push(CARGO_SHIP);
                    }
                    break;
            }
        });

        return activeValues;
    },

    getAlignment: function (params) {
        return this.getActiveValuesByParamName(params, ALIGNMENT);
    },

    getRoles: function (params) {
        return this.getActiveValuesByParamName(params, ROLE);
    },

    getFactions: function (params) {
        return this.getActiveValuesByParamName(params, FACTIONS);
    },

    getFeatures: function (params) {
        return this.getActiveValuesByParamName(params, FEATURES);
    },

    getFactionsLogic: function (params, defaultValue: Logic): Logic {
        let activeLogic = defaultValue;

        if (params.length === 0) {
            return activeLogic;
        }

        params.forEach((param) => {
            switch (param.name) {
                case FACTIONS:
                    activeLogic = param.logic;
                    break;
            }
        });

        return activeLogic;
    }
};

export default shipFiltration;
