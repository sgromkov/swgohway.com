import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAlignments } from '../lib/alignments';
import { getCharacters } from '../lib/characters';
import { getFactions } from '../lib/factions';
import { getRoles } from '../lib/roles';
import { Container } from '@material-ui/core';
import PageCaption from '../components/PageCaption';
import CharacterList from '../components/CharacterList';
import CharacterFilter from '../components/CharacterFilter';
import charactersFiltration from '../utilities/charactersFiltration';
import sortSelectOptionsByTitle from '../utilities/sortSelectOptionsByTitle';
import sortCharactersByName from '../utilities/sortCharactersByName';
import {
    Alignment,
    AlignmentCode,
    Character,
    Feature,
    Faction,
    Logic,
    LogicValues,
    Role,
} from '../types';

type CharactersProps = {
    alignments: Alignment[],
    characters: Character[],
    features: Feature[],
    factions: Faction[],
    roles: Role[],
};

const Characters: React.FC<CharactersProps> = ({
    alignments,
    characters,
    features,
    factions,
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

    const filterCharactersByFaction = (factionCodes: string[], logic: Logic): void => {
        setParams((prevParams) => {
            return charactersFiltration.setFactions(prevParams, factionCodes, logic);
        });
    };

    const filterCharactersByFeature = (featureCodes: string[]): void => {
        setParams((prevParams) => {
            return charactersFiltration.setFeatures(prevParams, featureCodes);
        });
    };

    const activeAlignments = charactersFiltration.getAlignment(params);
    const activeRoles = charactersFiltration.getRoles(params);
    const activeFactions = charactersFiltration.getFactions(params);
    const activeFeatures = charactersFiltration.getFeatures(params);
    const activeFactionsLogic = charactersFiltration.getFactionsLogic(params, LogicValues.OR) as Logic;

    return (
        <React.Fragment>
            <Head>
                <title>Characters | swgoh</title>
            </Head>
            <Container component="main" maxWidth="lg">
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
                    factions={factions.map((option) => {
                        return Object.assign({}, option, {
                            selected: activeFactions.indexOf(option.code) !== -1
                        });
                    })}
                    features={features.map((option) => {
                        return Object.assign({}, option, {
                            selected: activeFeatures.indexOf(option.code) !== -1
                        });
                    })}
                    factionsLogic={activeFactionsLogic}
                    onAlignmentChange={filterCharactersByAlignment}
                    onRoleChange={filterCharactersByRole}
                    onFactionChange={filterCharactersByFaction}
                    onFeatureChange={filterCharactersByFeature}
                    onReset={() => { setParams([]) }}
                />
                <CharacterList
                    characters={charactersFiltration.getFilteredCharacters(characters, params)}
                />
            </Container>
        </React.Fragment>
    );
};

export default Characters;

export const getStaticProps: GetStaticProps = async () => {
    const alignments: Alignment[] = await getAlignments();
    const characters: Character[] = await getCharacters();
    const factions: Faction[] = await getFactions();
    const roles: Role[] = await getRoles();

    const features: Feature[] = [
        { code: 'leader', title: 'Leader' },
        { code: 'fleetCommander', title: 'Fleet Commander' },
        { code: 'galacticLegend', title: 'Galactic Legend' },
        { code: 'crewMember', title: 'Crew member' },
    ];

    return {
        props: {
            alignments: alignments.sort(sortSelectOptionsByTitle),
            characters: characters.sort(sortCharactersByName),
            features: features.sort(sortSelectOptionsByTitle),
            factions: factions.sort(sortSelectOptionsByTitle),
            roles: roles.sort(sortSelectOptionsByTitle),
        } as CharactersProps
    };
}
