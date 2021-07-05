import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAlignments } from '../lib/alignments';
import { getCharacters } from '../lib/characters';
import { getFractions } from '../lib/fractions';
import { getRoles } from '../lib/roles';
import { Container } from '@material-ui/core';
import PageCaption from '../components/PageCaption';
import CharacterList from '../components/CharacterList';
import CharacterFilter from '../components/CharacterFilter';
import charactersFiltration from '../utilities/charactersFiltration';
import {
    Alignment,
    AlignmentCode,
    Character,
    Feature,
    Fraction,
    Logic,
    LogicValues,
    Role
} from '../types';

const selectOptionSortByTitle = (a, b) => {
    return (a.title > b.title) ? 1 : -1;
};

type CharactersProps = {
    alignments: Alignment[],
    characters: Character[],
    features: Feature[],
    fractions: Fraction[],
    roles: Role[],
};

const Characters: React.FC<CharactersProps> = ({
    alignments,
    characters,
    features,
    fractions,
    roles,
}) => {
    const [params, setParams] = useState([]);

    const filterCharactersByAlignment = (alignmentCode: AlignmentCode): void => {
        setParams((prevParams) => {
            return charactersFiltration.setAlignment(prevParams, alignmentCode);
        });
    };

    const filterCharactersByRole = (roleCodes: string[]): void => {
        setParams((prevParams) => {
            return charactersFiltration.setRoles(prevParams, roleCodes);
        });
    };

    const filterCharactersByFraction = (fractionCodes: string[], logic: Logic): void => {
        setParams((prevParams) => {
            return charactersFiltration.setFractions(prevParams, fractionCodes, logic);
        });
    };

    const filterCharactersByFeature = (featureCodes: string[]): void => {
        setParams((prevParams) => {
            return charactersFiltration.setFeatures(prevParams, featureCodes);
        });
    };

    const activeAlignments = charactersFiltration.getAlignment(params);
    const activeRoles = charactersFiltration.getRoles(params);
    const activeFractions = charactersFiltration.getFractions(params);
    const activeFeatures = charactersFiltration.getFeatures(params);
    const activeFractionsLogic: Logic = charactersFiltration.getFractionsLogic(params, LogicValues.OR);

    return (
        <Container component="main" maxWidth="lg">
            <Head>
                <title>Characters | swgoh</title>
            </Head>
            <PageCaption caption="Characters" />
            <CharacterFilter
                alignments={alignments.map((option) => {
                    return Object.assign({}, option, {
                        selected: activeAlignments.indexOf(option.code) !== -1
                    });
                })}
                roles={roles.map((option) => {
                    return Object.assign({}, option, {
                        selected: activeRoles.indexOf(option.code) !== -1
                    });
                })}
                fractions={fractions.map((option) => {
                    return Object.assign({}, option, {
                        selected: activeFractions.indexOf(option.code) !== -1
                    });
                })}
                features={features.map((option) => {
                    return Object.assign({}, option, {
                        selected: activeFeatures.indexOf(option.code) !== -1
                    });
                })}
                fractionsLogic={activeFractionsLogic}
                onAlignmentChange={filterCharactersByAlignment}
                onRoleChange={filterCharactersByRole}
                onFractionChange={filterCharactersByFraction}
                onFeatureChange={filterCharactersByFeature}
                onReset={() => {setParams([])}}
            />
            <CharacterList
                characters={charactersFiltration.getFilteredCharacters(characters, params)}
            />
        </Container >
    );
};

export default Characters;

export const getStaticProps: GetStaticProps = async () => {
    const alignments: Alignment[] = await getAlignments();
    const characters: Character[] = await getCharacters();
    const fractions: Fraction[] = await getFractions();
    const roles: Role[] = await getRoles();

    const features: Feature[] = [
        { code: 'leader', title: 'Leader' },
        { code: 'fleetCommander', title: 'Fleet Commander' },
        { code: 'galacticLegend', title: 'Galactic Legend' },
        { code: 'crewMember', title: 'Crew member' },
    ];

    return {
        props: {
            alignments: alignments.sort(selectOptionSortByTitle),
            characters,
            features: features.sort(selectOptionSortByTitle),
            fractions: fractions.sort(selectOptionSortByTitle),
            roles: roles.sort(selectOptionSortByTitle),
        } as CharactersProps
    };
}
