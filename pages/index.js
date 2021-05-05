import React, { useState } from 'react';
import Head from 'next/head';
import { getCharacters } from '../lib/characters';
import { getAlignments } from '../lib/alignments';
import { getRoles } from '../lib/roles';
import { getFractions } from '../lib/fractions';
import { Container } from '@material-ui/core';
import PageCaption from '../components/PageCaption';
import CharacterList from '../components/CharacterList';
import CharacterFilter from '../components/CharacterFilter';
import charactersFiltrator from '../utilities/charactersFiltrator';

export default function Characters({ characters, alignments, roles, fractions, features }) {
    const [params, setParams] = useState([]);

    const filterCharactersByAlignment = (alignmentCode) => {
        charactersFiltrator.setAlignment(setParams, alignmentCode);
    };

    const filterCharactersByRole = (roleCodes) => {
        charactersFiltrator.setRoles(setParams, roleCodes);
    };

    const filterCharactersByFraction = (fractionCodes, logic) => {
        charactersFiltrator.setFractions(setParams, fractionCodes, logic);
    };

    const filterCharactersByFeature = (featureCodes) => {
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
}

export async function getStaticProps() {
    const characters = await getCharacters();
    const alignments = await getAlignments();
    const roles = await getRoles();
    const fractions = await getFractions();

    const features = [
        { code: 'leader', title: 'Leader' },
        { code: 'fleetCommander', title: 'Fleet Commander' },
        { code: 'galacticLegend', title: 'Galactic Legend' }
    ];

    return {
        props: {
            characters,
            alignments,
            roles,
            fractions,
            features
        }
    };
}
