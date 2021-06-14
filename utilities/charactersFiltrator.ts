const ALIGNMENT = 'alignment';
const ROLE = 'role';
const FRACTIONS = 'fractions';
const LEADER = 'leader';
const FLEET_COMMANDER = 'fleetCommander';
const GALACTIC_LEGEND = 'galacticLegend';
const CREW_MEMBER = 'crewMember';

const charactersFiltrator = {
    setAlignment: function (setParams, alignmentCode) {
        const PARAM_NAME = ALIGNMENT;

        setParams((prevParams) => {
            const newParams = prevParams.filter((param) => param.name !== PARAM_NAME);

            if (typeof alignmentCode === 'string' && alignmentCode) {
                newParams.push({
                    name: PARAM_NAME,
                    value: alignmentCode
                });
            }

            return newParams;
        });
    },

    setRoles: function (setParams, roleCodes) {
        const PARAM_NAME = ROLE;

        setParams((prevParams) => {
            const newParams = prevParams.filter((param) => param.name !== PARAM_NAME);

            if (Array.isArray(roleCodes) && roleCodes.length > 0) {
                newParams.push({
                    name: PARAM_NAME,
                    value: roleCodes,
                    logic: 'or'
                });
            }

            return newParams;
        });
    },

    setFractions: function (setParams, fractionCodes, logic) {
        const PARAM_NAME = FRACTIONS;

        setParams((prevParams) => {
            const newParams = prevParams.filter((param) => param.name !== PARAM_NAME);

            if (Array.isArray(fractionCodes) && fractionCodes.length > 0) {
                newParams.push({
                    name: PARAM_NAME,
                    value: fractionCodes,
                    logic
                });
            }

            return newParams;
        });
    },

    setFeatures: function (setParams, featureCodes) {
        const PARAM_NAMES = [
            LEADER,
            FLEET_COMMANDER,
            GALACTIC_LEGEND,
            CREW_MEMBER,
        ];

        setParams((prevParams) => {
            const newParams = prevParams.filter((param) => PARAM_NAMES.indexOf(param.name) === -1);

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
        });
    },

    getFilteredCharacters: function (characters, params) {
        if (params.length === 0) {
            return characters;
        }

        return characters.filter((character) => {
            const matchedParams = [];

            params.forEach((param) => {
                let isMatched = false;

                switch (param.name) {
                    case ALIGNMENT:
                        isMatched = character.alignment.code === param.value;
                        break;
                    case ROLE:
                        isMatched = param.value.indexOf(character.role.code) > -1;
                        break;
                    case FRACTIONS:
                        const findedFractions = [];

                        param.value.forEach((seekingValue) => {
                            character.fractions.forEach((fraction) => {
                                if (fraction.code === seekingValue) {
                                    findedFractions.push(seekingValue);
                                }
                            });
                        });

                        if (findedFractions.length === 0) {
                            isMatched = false;
                        } else if (param.logic === 'or') {
                            isMatched = true;
                        } else {
                            isMatched = findedFractions.length === param.value.length;
                        }

                        break;
                    case LEADER:
                        isMatched = character.leader;
                        break;
                    case FLEET_COMMANDER:
                        isMatched = character.fleetCommander;
                        break;
                    case GALACTIC_LEGEND:
                        isMatched = character.galacticLegend;
                        break;
                    case CREW_MEMBER:
                        isMatched = !!(character.ship);
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
    }
};

export default charactersFiltrator;
