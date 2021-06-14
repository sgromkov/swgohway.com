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
import charactersFiltrator from '../utilities/charactersFiltrator';
import { Alignment, AlignmentCode, Character, Feature, Fraction, Logic, Role } from '../types';

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
        charactersFiltrator.setAlignment(setParams, alignmentCode);
    };

    const filterCharactersByRole = (roleCodes: string[]): void => {
        charactersFiltrator.setRoles(setParams, roleCodes);
    };

    const filterCharactersByFraction = (fractionCodes: string[], logic: Logic): void => {
        charactersFiltrator.setFractions(setParams, fractionCodes, logic);
    };

    const filterCharactersByFeature = (featureCodes: string[]): void => {
        charactersFiltrator.setFeatures(setParams, featureCodes);
    };

    return (
        <Container component="main" maxWidth="lg">
            <Head>
                <title>Characters | swgoh</title>
            </Head>
            <PageCaption caption="Characters" />
            <CharacterFilter
                alignments={alignments}
                roles={roles}
                fractions={fractions}
                features={features}
                onAligmentChange={filterCharactersByAlignment}
                onRoleChange={filterCharactersByRole}
                onFractionChange={filterCharactersByFraction}
                onFeatureChange={filterCharactersByFeature}
            />
            <CharacterList
                characters={charactersFiltrator.getFilteredCharacters(characters, params)}
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
            alignments,
            characters,
            features,
            fractions,
            roles,
        } as CharactersProps
    };
}
